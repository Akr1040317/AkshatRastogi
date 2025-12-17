import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

interface GitHubStats {
  totalLines: number;
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
    // Fetch all public repositories
    const reposResponse = await fetch('https://api.github.com/users/Akr1040317/repos?per_page=100&sort=updated', {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }
    
    const repos: any[] = await reposResponse.json();
    
    // Filter out forks and calculate total size
    const publicRepos = repos.filter((repo: any) => !repo.fork);
    
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
    
    // Log calculation details
    console.log(`📊 GitHub Stats Calculation:`);
    console.log(`   Total public repos: ${publicRepos.length}`);
    console.log(`   Total estimated lines: ${totalLines.toLocaleString()}`);
    console.log(`   Top 5 repos by size:`);
    repoDetails.slice(0, 5).forEach((repo, idx) => {
      console.log(`     ${idx + 1}. ${repo.name}: ${repo.sizeKB}KB = ~${repo.estimatedLines.toLocaleString()} lines`);
    });
    
    // If we got a reasonable estimate, use it; otherwise fallback
    if (totalLines === 0 && publicRepos.length > 0) {
      // Fallback: estimate based on repo count
      totalLines = publicRepos.length * 5000;
      console.log(`   ⚠️ Using fallback calculation: ${publicRepos.length} repos × 5000 = ${totalLines.toLocaleString()} lines`);
    }
    
    const stats: GitHubStats = {
      totalLines,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    // Fallback: return a reasonable estimate
    return NextResponse.json(
      { 
        totalLines: 60000, // Fallback estimate
        lastUpdated: new Date().toISOString(),
        error: 'Failed to fetch stats, using estimate' 
      },
      { status: 200 } // Return 200 so frontend can still use the estimate
    );
  }
}
