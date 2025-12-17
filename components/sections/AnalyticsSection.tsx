'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Users, Github, Code, FileText, GitBranch, Folder } from 'lucide-react';

interface GitHubStats {
  publicRepos: number;
  totalCommits: number;
  totalLines: number;
  totalFiles: number;
  loading: boolean;
}

export default function AnalyticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [githubStats, setGithubStats] = useState<GitHubStats>({
    publicRepos: 0,
    totalCommits: 0,
    totalLines: 0,
    totalFiles: 0,
    loading: true,
  });

  useEffect(() => {
    // Fetch GitHub stats
    const fetchGitHubStats = async () => {
      try {
        // Get public repos count
        const reposResponse = await fetch('https://api.github.com/users/Akr1040317');
        const reposData = await reposResponse.json();
        
        // Get list of public repos
        const reposListResponse = await fetch('https://api.github.com/users/Akr1040317/repos?per_page=100');
        const reposList = await reposListResponse.json();
        
        const publicRepos = reposData.public_repos || reposList.length || 0;
        
        // Try to fetch actual lines of code from our API route
        let totalLines = 0;
        try {
          const statsResponse = await fetch('/api/github-stats');
          if (statsResponse.ok) {
            const statsData = await statsResponse.json();
            totalLines = statsData.totalLines || 0;
            console.log(`✅ Fetched LOC from API: ${totalLines.toLocaleString()} lines`);
          }
        } catch (error) {
          console.log('⚠️ Could not fetch from API, using estimate', error);
        }
        
        // Fallback estimate if API doesn't have data yet
        if (totalLines === 0) {
          totalLines = publicRepos * 5000; // Rough estimate: ~5000 lines per repo
          console.log(`📊 Using fallback estimate: ${publicRepos} repos × 5000 = ${totalLines.toLocaleString()} lines`);
        }
        
        // Estimate commits (GitHub API doesn't provide total commits easily)
        const estimatedCommits = publicRepos * 50; // Rough estimate
        
        setGithubStats({
          publicRepos,
          totalCommits: estimatedCommits,
          totalLines,
          totalFiles: publicRepos * 15, // Rough estimate: ~15 files per repo
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback values
        setGithubStats({
          publicRepos: 20,
          totalCommits: 1000,
          totalLines: 100000,
          totalFiles: 300,
          loading: false,
        });
      }
    };

    fetchGitHubStats();
  }, []);

  const stats = [
    {
      icon: Globe,
      label: 'Websites Created',
      value: '72+',
      color: 'text-blue-400',
      bgColor: 'bg-blue/20',
      delay: 0,
    },
    {
      icon: Users,
      label: 'Hive Students',
      value: '600+',
      color: 'text-purple-400',
      bgColor: 'bg-purple/20',
      delay: 0.1,
    },
    {
      icon: Github,
      label: 'GitHub Repositories',
      value: githubStats.loading ? '...' : `${githubStats.publicRepos}+`,
      color: 'text-pink-400',
      bgColor: 'bg-pink/20',
      delay: 0.2,
    },
    {
      icon: Code,
      label: 'Lines of Code',
      value: githubStats.loading 
        ? '...' 
        : githubStats.totalLines >= 1000000 
          ? `${(githubStats.totalLines / 1000000).toFixed(1)}M+`
          : githubStats.totalLines >= 1000 
            ? `${Math.round(githubStats.totalLines / 1000)}K+`
            : `${githubStats.totalLines}+`,
      color: 'text-green-400',
      bgColor: 'bg-green/20',
      delay: 0.3,
    },
  ];

  return (
    <section id="analytics" ref={ref} className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">By The Numbers</span>
          </h2>
          <p className="text-xl text-muted">Impact & achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: stat.delay,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-2 rounded-2xl p-8 text-center group cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2, type: 'spring' }}
                  className={`inline-flex p-4 rounded-xl ${stat.bgColor} mb-4`}
                >
                  <Icon size={32} className={stat.color} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: stat.delay + 0.3 }}
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: stat.delay + 0.4 }}
                  className="text-muted text-sm"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Note about GitHub stats */}
        {!githubStats.loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8 text-sm text-muted"
          >
            <p>
              GitHub stats are fetched from{' '}
              <a 
                href="https://github.com/Akr1040317" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple hover:text-pink transition-colors"
              >
                @Akr1040317
              </a>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

