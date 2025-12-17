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
    
    for (const repo of publicRepos) {
      // Repository size is in KB
      const repoSizeKB = repo.size || 0;
      totalLines += estimateLinesFromSize(repoSizeKB);
    }
    
    // If we got a reasonable estimate, use it; otherwise fallback
    if (totalLines === 0 && publicRepos.length > 0) {
      // Fallback: estimate based on repo count
      totalLines = publicRepos.length * 5000;
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
