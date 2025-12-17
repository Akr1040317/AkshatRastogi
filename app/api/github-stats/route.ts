import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

interface GitHubStats {
  totalLines: number;
  lastUpdated: string;
}

export async function GET() {
  try {
    let stats: GitHubStats;
    
    // Try to read from local public file first (if running locally or after GitHub Actions update)
    try {
      const filePath = path.join(process.cwd(), 'public', 'github-stats-simple.json');
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        stats = JSON.parse(fileContent);
      } else {
        throw new Error('Local file not found');
      }
    } catch (localError) {
      // Try fetching from GitHub raw content (for production)
      try {
        const fileResponse = await fetch(
          `https://raw.githubusercontent.com/Akr1040317/AkshatRastogi/main/public/github-stats-simple.json`,
          { 
            next: { revalidate: 3600 },
            headers: {
              'Cache-Control': 'no-cache',
            }
          }
        );
        
        if (fileResponse.ok) {
          stats = await fileResponse.json();
        } else {
          throw new Error('GitHub file not found');
        }
      } catch (githubError) {
        // Fallback: fetch from GitHub API and estimate
        const reposResponse = await fetch('https://api.github.com/users/Akr1040317/repos?per_page=100', {
          next: { revalidate: 3600 },
        });
        const repos = await reposResponse.json();
        
        // Estimate based on repo count (rough approximation)
        const publicRepos = repos.filter((repo: any) => !repo.fork).length;
        const estimatedLines = publicRepos * 5000; // Rough estimate: ~5000 lines per repo
        
        stats = {
          totalLines: estimatedLines,
          lastUpdated: new Date().toISOString(),
        };
      }
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return NextResponse.json(
      { 
        totalLines: 0, 
        lastUpdated: new Date().toISOString(),
        error: 'Failed to fetch stats' 
      },
      { status: 500 }
    );
  }
}
