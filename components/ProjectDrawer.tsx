'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-[101] flex items-center justify-center pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full max-w-6xl max-h-[90vh] bg-bg-1 glass-2 rounded-2xl border border-white/10 overflow-hidden flex flex-col pointer-events-auto shadow-2xl">
              {/* Header */}
              <div className="flex-shrink-0 glass-2 border-b border-white/10 p-6 flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{project.name}</h2>
                  <p className="text-xl text-muted mb-4">{project.tagline}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span>{project.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{project.startDate} {project.endDate && `- ${project.endDate}`}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 rounded-xl glass hover:glass-2 transition-all flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                {/* Media */}
                {project.media && project.media.length > 0 && (
                  <div className="space-y-4">
                    {project.media.map((media, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-xl overflow-hidden border border-white/10"
                      >
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
                            className="w-full h-auto object-contain"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold mb-3">About</h3>
                  <p className="text-muted text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Stats */}
                {project.stats && project.stats.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="glass rounded-xl p-6 text-center"
                      >
                        <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                        <div className="text-sm text-muted">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Problem & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-pink flex items-center gap-2">
                      <span className="w-1 h-6 bg-pink rounded-full" />
                      Problem
                    </h3>
                    <p className="text-muted leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-purple flex items-center gap-2">
                      <span className="w-1 h-6 bg-purple rounded-full" />
                      Solution
                    </h3>
                    <p className="text-muted leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue rounded-full" />
                    Technical Highlights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.technicalHighlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-start gap-3 glass rounded-lg p-4"
                      >
                        <span className="text-purple mt-1 flex-shrink-0">•</span>
                        <span className="text-muted">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div>
                  <h3 className="text-2xl font-bold mb-3">Outcome</h3>
                  <p className="text-muted text-lg leading-relaxed">{project.outcome}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.03 }}
                        className="px-4 py-2 rounded-full glass text-sm font-medium hover:glass-2 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                  {project.links.website && (
                    <motion.a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glass-2 transition-all font-medium"
                    >
                      <ExternalLink size={20} />
                      <span>Visit Website</span>
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glass-2 transition-all font-medium"
                    >
                      <Github size={20} />
                      <span>View on GitHub</span>
                    </motion.a>
                  )}
                  {project.links.appStore && (
                    <motion.a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glass-2 transition-all font-medium"
                    >
                      <ExternalLink size={20} />
                      <span>Download on App Store</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


