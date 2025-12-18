'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Play, Target, Lightbulb, Code, Trophy, Calendar, MapPin } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl max-h-[90vh] z-[91] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full md:h-auto bg-bg-1 glass-2 rounded-2xl border border-white/10 shadow-2xl overflow-y-auto">
              {/* Header with Gradient */}
              <div className="sticky top-0 glass-2 border-b border-white/10 p-6 md:p-8 backdrop-blur-xl z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">{project.name}</h2>
                    <p className="text-muted text-lg">{project.tagline}</p>
                  </div>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-xl glass hover:glass-2 transition-all flex-shrink-0"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                
                {/* Project Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted">
                    <Calendar size={16} />
                    <span>{project.startDate} {project.endDate && `- ${project.endDate}`}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Code size={16} />
                    <span>{project.role}</span>
                  </div>
                  {project.category === 'featured' && (
                    <div className="ml-auto px-3 py-1 rounded-full bg-purple/20 text-purple text-xs font-semibold">
                      Featured Project
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Media - Hero Image */}
                {project.media && project.media.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-4"
                  >
                    {project.media.map((media, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                        {media.type === 'video' ? (
                          <video
                            src={media.url}
                            controls
                            className="w-full"
                            autoPlay
                            loop
                          />
                        ) : (
                          <img
                            src={media.url}
                            alt={media.alt}
                            className="w-full h-auto object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Stats - Enhanced Cards */}
                {project.stats && project.stats.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {project.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="glass-2 rounded-xl p-5 text-center border border-white/10 hover:border-purple/50 transition-all group"
                      >
                        <div className="text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="glass-2 rounded-xl p-6 border border-white/10"
                >
                  <p className="text-muted leading-relaxed">{project.description}</p>
                </motion.div>

                {/* Problem & Solution Side by Side */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-2 rounded-xl p-6 border border-pink/20"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-pink/20">
                        <Target size={20} className="text-pink" />
                      </div>
                      <h3 className="text-xl font-bold text-pink">Problem</h3>
                    </div>
                    <p className="text-muted leading-relaxed">{project.problem}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="glass-2 rounded-xl p-6 border border-purple/20"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-purple/20">
                        <Lightbulb size={20} className="text-purple" />
                      </div>
                      <h3 className="text-xl font-bold text-purple">Solution</h3>
                    </div>
                    <p className="text-muted leading-relaxed">{project.solution}</p>
                  </motion.div>
                </div>

                {/* Technical Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-2 rounded-xl p-6 border border-blue/20"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-blue/20">
                      <Code size={20} className="text-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-blue">Technical Highlights</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.technicalHighlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple flex-shrink-0" />
                        <span className="text-muted leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Outcome */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-2 rounded-xl p-6 border border-orange/20"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-orange/20">
                      <Trophy size={20} className="text-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-orange">Outcome</h3>
                  </div>
                  <p className="text-muted leading-relaxed">{project.outcome}</p>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="glass-2 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-lg glass text-sm font-medium hover:glass-2 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Links - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3 pt-6 border-t border-white/10"
                >
                  {project.links.website && (
                    <motion.a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl glass-2 hover:glass border border-white/10 hover:border-purple/50 transition-all group"
                    >
                      <ExternalLink size={18} className="text-purple group-hover:rotate-[-45deg] transition-transform" />
                      <span className="font-medium">Visit Website</span>
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl glass-2 hover:glass border border-white/10 hover:border-purple/50 transition-all group"
                    >
                      <Github size={18} className="text-purple group-hover:scale-110 transition-transform" />
                      <span className="font-medium">View Code</span>
                    </motion.a>
                  )}
                  {project.links.appStore && (
                    <motion.a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl glass-2 hover:glass border border-white/10 hover:border-purple/50 transition-all group"
                    >
                      <ExternalLink size={18} className="text-purple group-hover:rotate-[-45deg] transition-transform" />
                      <span className="font-medium">App Store</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


