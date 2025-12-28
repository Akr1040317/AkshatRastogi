import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

interface GitHubStats {
  publicRepos: number;
  totalLines: number;
  totalCommitsLastYear: number;
  lastUpdated: string;
}

// Estimate LOC based on repository size (in KB)
// Average: ~50-100 lines per KB depending on language
function estimateLinesFromSize(sizeKB: number): number {
  // Conservative estimate: ~75 lines per KB
  // This accounts for comments, whitespace, and different languages
  return Math.floor(sizeKB * 75);
}

export async function GET() {
  try {
    // Fetch all public repositories with pagination
    let allRepos: any[] = [];
    let page = 1;
    let hasMore = true;
    
    while (hasMore) {
      const reposResponse = await fetch(
        `https://api.github.com/users/Akr1040317/repos?per_page=100&page=${page}&sort=updated`,
        {
          next: { revalidate: 3600 },
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      if (!reposResponse.ok) {
        throw new Error(`GitHub API error: ${reposResponse.status}`);
      }
      
      const repos: any[] = await reposResponse.json();
      
      if (repos.length === 0) {
        hasMore = false;
      } else {
        allRepos = allRepos.concat(repos);
        // Check if there are more pages by checking the Link header
        const linkHeader = reposResponse.headers.get('link');
        if (linkHeader && linkHeader.includes('rel="next"')) {
          page++;
        } else {
          hasMore = false;
        }
      }
    }
    
    // Filter out forks for accurate count of original repos
    const publicRepos = allRepos.filter((repo: any) => !repo.fork);
    
    // Calculate total lines based on repository sizes
    let totalLines = 0;
    const repoDetails: Array<{ name: string; sizeKB: number; estimatedLines: number }> = [];
    
    for (const repo of publicRepos) {
      // Repository size is in KB
      const repoSizeKB = repo.size || 0;
      const estimatedLines = estimateLinesFromSize(repoSizeKB);
      totalLines += estimatedLines;
      
      if (repoSizeKB > 0) {
        repoDetails.push({
          name: repo.name,
          sizeKB: repoSizeKB,
          estimatedLines,
        });
      }
    }
    
    // Sort repos by size for logging
    repoDetails.sort((a, b) => b.estimatedLines - a.estimatedLines);
    
    // Calculate commits in 2025 (from January 1, 2025 to now)
    const sinceDate = '2025-01-01'; // Format: YYYY-MM-DD
    
    let totalCommitsLastYear = 0;
    const commitDetails: Array<{ name: string; commits: number }> = [];
    
    console.log(`📊 Calculating commits in 2025 (since ${sinceDate})...`);
    
    // Fetch commits from each repo (limit to avoid rate limits)
    for (const repo of publicRepos.slice(0, 50)) { // Limit to 50 repos to avoid rate limits
      try {
        // Fetch commits with author filter and date filter
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.full_name}/commits?author=Akr1040317&since=${sinceDate}&per_page=100`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );
        
        if (commitsResponse.ok) {
          // GitHub API uses pagination, but for commits in last year, we can get a good estimate
          // by checking the Link header or just counting what we get
          const commits = await commitsResponse.json();
          const commitCount = Array.isArray(commits) ? commits.length : 0;
          
          // If we got 100 commits, there might be more (GitHub pagination limit)
          // For accuracy, we'd need to paginate, but for performance we'll use this estimate
          if (commitCount === 100) {
            // Likely more commits, estimate based on repo activity
            // Check if repo has recent activity
            const daysSinceUpdate = Math.floor(
              (new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24)
            );
            if (daysSinceUpdate < 30) {
              // Active repo, estimate higher
              totalCommitsLastYear += commitCount * 1.5; // Estimate multiplier
            } else {
              totalCommitsLastYear += commitCount;
            }
          } else {
            totalCommitsLastYear += commitCount;
          }
          
          if (commitCount > 0) {
            commitDetails.push({ name: repo.name, commits: commitCount });
          }
        }
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.log(`   ⚠️ Error fetching commits for ${repo.name}:`, error);
      }
    }
    
    // Sort repos by commit count for logging
    commitDetails.sort((a, b) => b.commits - a.commits);
    
    // Log calculation details
    console.log(`📊 GitHub Stats Calculation:`);
    console.log(`   Total public repos: ${publicRepos.length}`);
    console.log(`   Total estimated lines: ${totalLines.toLocaleString()}`);
    console.log(`   Total commits (2025): ${Math.round(totalCommitsLastYear).toLocaleString()}`);
    console.log(`   Top 5 repos by size:`);
    repoDetails.slice(0, 5).forEach((repo, idx) => {
      console.log(`     ${idx + 1}. ${repo.name}: ${repo.sizeKB}KB = ~${repo.estimatedLines.toLocaleString()} lines`);
    });
    if (commitDetails.length > 0) {
      console.log(`   Top 5 repos by commits:`);
      commitDetails.slice(0, 5).forEach((repo, idx) => {
        console.log(`     ${idx + 1}. ${repo.name}: ${repo.commits} commits`);
      });
    }
    
    // If we got a reasonable estimate, use it; otherwise fallback
    if (totalLines === 0 && publicRepos.length > 0) {
      // Fallback: estimate based on repo count
      totalLines = publicRepos.length * 5000;
      console.log(`   ⚠️ Using fallback calculation: ${publicRepos.length} repos × 5000 = ${totalLines.toLocaleString()} lines`);
    }
    
    const stats: GitHubStats = {
      publicRepos: publicRepos.length,
      totalLines,
      totalCommitsLastYear: Math.round(totalCommitsLastYear),
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    // Fallback: return a reasonable estimate
    return NextResponse.json(
      { 
        publicRepos: 19, // Fallback estimate
        totalLines: 60000, // Fallback estimate
        totalCommitsLastYear: 500, // Fallback estimate
        lastUpdated: new Date().toISOString(),
        error: 'Failed to fetch stats, using estimate' 
      },
      { status: 200 } // Return 200 so frontend can still use the estimate
    );
  }
}
