'use client';

import { useState, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Users, Github, Code, FileText, GitBranch, Folder } from 'lucide-react';

// Animated counter component
function AnimatedNumber({ value, delay = 0, decimals = 0 }: { value: number; delay?: number; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const duration = 2000; // 2 seconds
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const current = startValue + (value - startValue) * easeOutQuart;
      
      if (decimals > 0) {
        setDisplayValue(parseFloat(current.toFixed(decimals)));
      } else {
        setDisplayValue(Math.floor(current));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final value is exact
        setDisplayValue(value);
      }
    };

    const timeout = setTimeout(() => {
      animate();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay, decimals]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
}

interface GitHubStats {
  publicRepos: number;
  totalCommits: number;
  totalCommitsLastYear: number;
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
    totalCommitsLastYear: 0,
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
        
        // Try to fetch actual stats from our API route
        let totalLines = 0;
        let totalCommitsLastYear = 0;
        try {
          const statsResponse = await fetch('/api/github-stats');
          if (statsResponse.ok) {
            const statsData = await statsResponse.json();
            totalLines = statsData.totalLines || 0;
            totalCommitsLastYear = statsData.totalCommitsLastYear || 0;
            console.log(`✅ Fetched stats from API:`);
            console.log(`   LOC: ${totalLines.toLocaleString()} lines`);
            console.log(`   Commits (last year): ${totalCommitsLastYear.toLocaleString()}`);
          }
        } catch (error) {
          console.log('⚠️ Could not fetch from API, using estimate', error);
        }
        
        // Fallback estimate if API doesn't have data yet
        if (totalLines === 0) {
          totalLines = publicRepos * 5000; // Rough estimate: ~5000 lines per repo
          console.log(`📊 Using fallback estimate: ${publicRepos} repos × 5000 = ${totalLines.toLocaleString()} lines`);
        }
        
        // Fallback for commits if API doesn't have data
        if (totalCommitsLastYear === 0) {
          totalCommitsLastYear = publicRepos * 20; // Rough estimate: ~20 commits per repo per year
        }
        
        setGithubStats({
          publicRepos,
          totalCommits: totalCommitsLastYear, // Use last year's commits as total
          totalCommitsLastYear,
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
          totalCommitsLastYear: 500,
          totalLines: 100000,
          totalFiles: 300,
          loading: false,
        });
      }
    };

    fetchGitHubStats();
  }, []);

  // Helper function to format number with animation
  const formatAnimatedValue = (num: number, suffix: string = '+') => {
    if (num >= 1000000) {
      return { value: num / 1000000, format: 'M', suffix };
    } else if (num >= 1000) {
      return { value: num / 1000, format: 'K', suffix };
    }
    return { value: num, format: '', suffix };
  };

  const stats = [
    {
      icon: Globe,
      label: 'Websites Created',
      numericValue: 72,
      color: 'text-blue-400',
      bgColor: 'bg-blue/20',
      delay: 0,
    },
    {
      icon: Users,
      label: 'Hive Students',
      numericValue: 600,
      color: 'text-purple-400',
      bgColor: 'bg-purple/20',
      delay: 0.1,
    },
    {
      icon: Github,
      label: 'GitHub Repositories',
      numericValue: githubStats.publicRepos,
      isLoading: githubStats.loading,
      color: 'text-pink-400',
      bgColor: 'bg-pink/20',
      delay: 0.2,
    },
    {
      icon: Code,
      label: 'Lines of Code',
      numericValue: githubStats.totalLines,
      isLoading: githubStats.loading,
      color: 'text-green-400',
      bgColor: 'bg-green/20',
      delay: 0.3,
    },
    {
      icon: GitBranch,
      label: 'Commits (Last Year)',
      numericValue: githubStats.totalCommitsLastYear,
      isLoading: githubStats.loading,
      color: 'text-orange-400',
      bgColor: 'bg-orange/20',
      delay: 0.4,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: stat.delay,
                  type: 'spring',
                  stiffness: 120,
                  damping: 12,
                }}
                whileHover={{ scale: 1.05, y: -5, rotateX: 5 }}
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
                  {stat.isLoading ? (
                    '...'
                  ) : (
                    <>
                      {stat.numericValue >= 1000000 ? (
                        <>
                          <AnimatedNumber 
                            value={stat.numericValue / 1000000} 
                            delay={stat.delay + 0.3} 
                            decimals={1}
                          />
                          <span>M+</span>
                        </>
                      ) : stat.numericValue >= 1000 ? (
                        <>
                          <AnimatedNumber 
                            value={stat.numericValue / 1000} 
                            delay={stat.delay + 0.3}
                            decimals={0}
                          />
                          <span>K+</span>
                        </>
                      ) : (
                        <>
                          <AnimatedNumber 
                            value={stat.numericValue} 
                            delay={stat.delay + 0.3}
                            decimals={0}
                          />
                          <span>+</span>
                        </>
                      )}
                    </>
                  )}
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

