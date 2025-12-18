'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';

// Define collage layout patterns - mix of sizes, avoiding very tall cards
const getCardLayout = (index: number) => {
  const patterns = [
    { span: 'md:col-span-2 md:row-span-1', aspect: 'aspect-[2/1]' }, // Wide landscape
    { span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' }, // Square
    { span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' }, // Square
    { span: 'md:col-span-2 md:row-span-1', aspect: 'aspect-[2/1]' }, // Wide landscape
    { span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' }, // Square
    { span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' }, // Square
    { span: 'md:col-span-2 md:row-span-1', aspect: 'aspect-[2/1]' }, // Wide landscape
    { span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' }, // Square
  ];
  return patterns[index % patterns.length];
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured' | 'lab'>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter((p) => p.category === 'featured');
  const labProjects = projects.filter((p) => p.category === 'lab');
  const filteredProjects = filter === 'all' ? projects : filter === 'featured' ? featuredProjects : labProjects;

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

        {/* Projects Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-4 md:gap-6">
          {filteredProjects.map((project, index) => {
            const layout = getCardLayout(index);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group cursor-pointer ${layout.span}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-2 rounded-2xl overflow-hidden h-full border border-white/10 hover:border-purple/30 transition-all relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-purple/10 to-blue/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  
                  {/* Project Media */}
                  <div className={`relative ${layout.aspect} bg-gradient-to-br from-pink/20 via-purple/20 to-blue/20 overflow-hidden`}>
                    {project.media && project.media.length > 0 ? (
                      project.media[0].type === 'video' ? (
                        <video
                          src={project.media[0].url}
                          className="w-full h-full object-cover object-top"
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          src={project.media[0].url}
                          alt={project.media[0].alt}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl font-bold gradient-text opacity-50">
                          {project.name.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    
                    {/* Category Badge */}
                    {project.category === 'featured' && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-2 text-xs font-semibold bg-purple/30 text-purple">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-3 md:p-4 relative z-10">
                    <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-purple transition-colors line-clamp-1">
                      {project.name}
                    </h3>
                    <p className="text-muted text-xs mb-2 line-clamp-1">{project.tagline}</p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 text-xs rounded-lg glass"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-1.5 py-0.5 text-xs rounded-lg glass text-muted">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Stats or Description */}
                    {project.stats && project.stats.length > 0 ? (
                      <div className="flex gap-2 text-xs">
                        {project.stats.slice(0, 2).map((stat, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <span className="text-purple font-bold">{stat.value}</span>
                            <span className="text-muted">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-muted line-clamp-1">{project.description}</p>
                    )}

                    {/* Links */}
                    <div className="flex gap-1.5 mt-3 pt-3 border-t border-white/10">
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg glass hover:glass-2 transition-all"
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg glass hover:glass-2 transition-all"
                        >
                          <Github size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

