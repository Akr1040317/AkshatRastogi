'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Play } from 'lucide-react';
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-[600px] z-[91] overflow-y-auto"
          >
            <div className="h-full bg-bg-1 glass-2 border-l border-white/10">
              {/* Header */}
              <div className="sticky top-0 glass-2 border-b border-white/10 p-6 flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                  <p className="text-muted">{project.tagline}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg glass hover:glass-2 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Media */}
                {project.media && project.media.length > 0 && (
                  <div className="space-y-4">
                    {project.media.map((media, i) => (
                      <div key={i} className="rounded-xl overflow-hidden">
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
                            className="w-full h-auto"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Stats */}
                {project.stats && project.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="glass rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-sm text-muted">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Problem */}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-pink">Problem</h3>
                  <p className="text-muted">{project.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple">Solution</h3>
                  <p className="text-muted">{project.solution}</p>
                </div>

                {/* Technical Highlights */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue">Technical Highlights</h3>
                  <ul className="space-y-2">
                    {project.technicalHighlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple mt-1">•</span>
                        <span className="text-muted">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div>
                  <h3 className="text-xl font-bold mb-2">Outcome</h3>
                  <p className="text-muted">{project.outcome}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full glass text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all"
                    >
                      <ExternalLink size={20} />
                      <span>Website</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all"
                    >
                      <ExternalLink size={20} />
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

