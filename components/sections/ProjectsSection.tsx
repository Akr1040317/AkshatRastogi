'use client';

import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles, ChevronDown, Target, Lightbulb, Code, Trophy } from 'lucide-react';
import { projects, Project } from '@/data/projects';

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured' | 'lab'>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter((p) => p.category === 'featured');
  const labProjects = projects.filter((p) => p.category === 'lab');
  const filteredProjects = filter === 'all' ? projects : filter === 'featured' ? featuredProjects : labProjects;

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="text-purple" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Projects</span>
            </h2>
            <Sparkles className="text-pink" size={32} />
          </div>
          <p className="text-xl text-muted">Things I've built and shipped</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {(['all', 'featured', 'lab'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                filter === f
                  ? 'glass-2 text-white'
                  : 'glass text-muted hover:text-white'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              <span className="ml-2 text-xs opacity-70">
                ({f === 'all' ? projects.length : f === 'featured' ? featuredProjects.length : labProjects.length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Expandable Cards */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-2 rounded-2xl overflow-hidden border border-white/10 hover:border-purple/30 transition-all"
              >
                {/* Project Header - Always Visible */}
                <div
                  className="cursor-pointer p-6 md:p-8"
                  onClick={() => toggleProject(project.id)}
                >
                  <div className="flex items-start gap-6">
                    {/* Project Image */}
                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-white/10">
                      {project.media && project.media.length > 0 ? (
                        <img
                          src={project.media[0].url}
                          alt={project.media[0].alt}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink/20 via-purple/20 to-blue/20">
                          <div className="text-3xl font-bold gradient-text opacity-50">
                            {project.name.charAt(0)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold mb-1 gradient-text">
                            {project.name}
                          </h3>
                          <p className="text-muted text-sm md:text-base mb-3">{project.tagline}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown size={24} className="text-muted" />
                        </motion.div>
                      </div>

                      {/* Quick Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                        {project.category === 'featured' && (
                          <span className="px-2 py-1 rounded-full bg-purple/20 text-purple text-xs font-semibold">
                            Featured
                          </span>
                        )}
                        {project.stats && project.stats.length > 0 && (
                          <div className="flex gap-4">
                            {project.stats.slice(0, 2).map((stat, i) => (
                              <div key={i} className="flex items-center gap-1">
                                <span className="text-purple font-bold">{stat.value}</span>
                                <span>{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-lg glass"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-lg glass text-muted">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10 space-y-6 pt-6">
                        {/* Full Image */}
                        {project.media && project.media.length > 0 && (
                          <div className="rounded-xl overflow-hidden border border-white/10">
                            <img
                              src={project.media[0].url}
                              alt={project.media[0].alt}
                              className="w-full h-auto"
                            />
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-muted leading-relaxed">{project.description}</p>

                        {/* Problem & Solution */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="glass rounded-xl p-4 border border-pink/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Target size={16} className="text-pink" />
                              <h4 className="font-bold text-pink">Problem</h4>
                            </div>
                            <p className="text-sm text-muted">{project.problem}</p>
                          </div>
                          <div className="glass rounded-xl p-4 border border-purple/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightbulb size={16} className="text-purple" />
                              <h4 className="font-bold text-purple">Solution</h4>
                            </div>
                            <p className="text-sm text-muted">{project.solution}</p>
                          </div>
                        </div>

                        {/* Technical Highlights */}
                        <div className="glass rounded-xl p-4 border border-blue/20">
                          <div className="flex items-center gap-2 mb-3">
                            <Code size={16} className="text-blue" />
                            <h4 className="font-bold text-blue">Technical Highlights</h4>
                          </div>
                          <ul className="space-y-2">
                            {project.technicalHighlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                <span className="text-purple mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcome */}
                        <div className="glass rounded-xl p-4 border border-orange/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Trophy size={16} className="text-orange" />
                            <h4 className="font-bold text-orange">Outcome</h4>
                          </div>
                          <p className="text-sm text-muted">{project.outcome}</p>
                        </div>

                        {/* All Technologies */}
                        <div>
                          <h4 className="font-bold mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-lg glass text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                          {project.links.website && (
                            <a
                              href={project.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all"
                            >
                              <ExternalLink size={16} className="text-purple" />
                              <span className="text-sm">Visit Website</span>
                            </a>
                          )}
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all"
                            >
                              <Github size={16} className="text-purple" />
                              <span className="text-sm">View Code</span>
                            </a>
                          )}
                          {project.links.appStore && (
                            <a
                              href={project.links.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all"
                            >
                              <ExternalLink size={16} className="text-purple" />
                              <span className="text-sm">App Store</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

