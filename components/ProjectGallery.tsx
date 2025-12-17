'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import ProjectDrawer from './ProjectDrawer';

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured' | 'lab'>('all');

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  const featuredProjects = projects.filter((p) => p.category === 'featured');
  const labProjects = projects.filter((p) => p.category === 'lab');

  return (
    <>
      <div className="space-y-8 pb-20 md:pb-8">
        {/* Filter Tabs */}
        <div className="flex gap-2">
          {(['all', 'featured', 'lab'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === f
                  ? 'glass-2 text-white'
                  : 'glass text-muted hover:text-white'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)} ({f === 'all' ? projects.length : f === 'featured' ? featuredProjects.length : labProjects.length})
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-2 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image/Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-pink/20 via-purple/20 to-blue/20 flex items-center justify-center relative overflow-hidden">
                  {project.media && project.media.length > 0 ? (
                    project.media[0].type === 'video' ? (
                      <video
                        src={project.media[0].url}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.media[0].url}
                        alt={project.media[0].alt}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="text-4xl font-bold gradient-text opacity-50">
                      {project.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    {project.category === 'featured' && (
                      <span className="px-2 py-1 text-xs rounded-full bg-purple/20 text-purple">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted text-sm mb-4">{project.tagline}</p>
                  <p className="text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 text-xs rounded glass"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded glass text-muted">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg glass hover:glass-2 transition-all"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg glass hover:glass-2 transition-all"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Drawer */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

