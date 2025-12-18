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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-3xl max-h-[85vh] z-[91] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-bg-1 glass-2 rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex-shrink-0 glass-2 border-b border-white/10 p-4 md:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1 gradient-text truncate">{project.name}</h2>
                    <p className="text-muted text-sm md:text-base truncate">{project.tagline}</p>
                  </div>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg glass hover:glass-2 transition-all flex-shrink-0"
                  >
                    <X size={20} />
                  </motion.button>
                </div>
                
                {/* Project Meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                  <div className="flex items-center gap-1.5 text-muted">
                    <Calendar size={14} />
                    <span>{project.startDate} {project.endDate && `- ${project.endDate}`}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted">
                    <Code size={14} />
                    <span className="truncate max-w-[200px]">{project.role}</span>
                  </div>
                  {project.category === 'featured' && (
                    <div className="ml-auto px-2 py-1 rounded-full bg-purple/20 text-purple text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">
                {/* Media */}
                {project.media && project.media.length > 0 && (
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    {project.media.map((media, i) => (
                      <div key={i}>
                        {media.type === 'video' ? (
                          <video src={media.url} controls className="w-full" />
                        ) : (
                          <img src={media.url} alt={media.alt} className="w-full h-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Stats */}
                {project.stats && project.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-3">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="glass rounded-lg p-3 text-center border border-white/10">
                        <div className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-xs text-muted mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div>
                  <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-4">
                  <div className="glass rounded-lg p-4 border border-pink/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={16} className="text-pink" />
                      <h3 className="text-base font-bold text-pink">Problem</h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="glass rounded-lg p-4 border border-purple/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb size={16} className="text-purple" />
                      <h3 className="text-base font-bold text-purple">Solution</h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="glass rounded-lg p-4 border border-blue/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={16} className="text-blue" />
                    <h3 className="text-base font-bold text-blue">Technical Highlights</h3>
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
                <div className="glass rounded-lg p-4 border border-orange/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy size={16} className="text-orange" />
                    <h3 className="text-base font-bold text-orange">Outcome</h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{project.outcome}</p>
                </div>

                {/* Technologies */}
                <div className="glass rounded-lg p-4 border border-white/10">
                  <h3 className="text-base font-bold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg glass text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all text-sm"
                    >
                      <ExternalLink size={16} className="text-purple" />
                      <span>Website</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all text-sm"
                    >
                      <Github size={16} className="text-purple" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all text-sm"
                    >
                      <ExternalLink size={16} className="text-purple" />
                      <span>App Store</span>
                    </a>
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


