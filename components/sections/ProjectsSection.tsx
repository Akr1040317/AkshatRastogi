'use client';

import { useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles, X, Filter, Search } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import ProjectModal from '@/components/ProjectDrawer';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'featured' | 'lab'>('all');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Extract all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    // Technology filter
    if (selectedTechs.length > 0) {
      filtered = filtered.filter(p =>
        selectedTechs.some(tech => p.technologies.includes(tech))
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [categoryFilter, selectedTechs, searchQuery]);

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setCategoryFilter('all');
    setSelectedTechs([]);
    setSearchQuery('');
  };

  const hasActiveFilters = categoryFilter !== 'all' || selectedTechs.length > 0 || searchQuery.trim() !== '';

  return (
    <>
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

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full glass-2 text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-col gap-4">
              {/* Category and Filter Toggle */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {(['all', 'featured', 'lab'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setCategoryFilter(f)}
                    className={`px-6 py-2 rounded-full transition-all font-medium ${
                      categoryFilter === f
                        ? 'glass-2 text-white'
                        : 'glass text-muted hover:text-white'
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                    <span className="ml-2 text-xs opacity-70">
                      ({f === 'all' ? projects.length : f === 'featured' ? projects.filter(p => p.category === 'featured').length : projects.filter(p => p.category === 'lab').length})
                    </span>
                  </button>
                ))}
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-2 rounded-full transition-all font-medium flex items-center gap-2 ${
                    showFilters || hasActiveFilters
                      ? 'glass-2 text-white'
                      : 'glass text-muted hover:text-white'
                  }`}
                >
                  <Filter size={16} />
                  Filters
                  {hasActiveFilters && (
                    <span className="px-2 py-0.5 rounded-full bg-purple/30 text-xs">
                      {selectedTechs.length + (searchQuery ? 1 : 0)}
                    </span>
                  )}
                </button>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 rounded-full glass text-muted hover:text-white transition-all font-medium flex items-center gap-2"
                  >
                    <X size={16} />
                    Clear All
                  </button>
                )}
              </div>

              {/* Technology Filter Chips */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="glass-2 rounded-2xl p-6"
                >
                  <h3 className="text-sm font-semibold text-muted mb-4 flex items-center gap-2">
                    <Filter size={16} />
                    Filter by Technology / Language
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTechnologies.map((tech) => {
                      const isSelected = selectedTechs.includes(tech);
                      return (
                        <button
                          key={tech}
                          onClick={() => toggleTech(tech)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            isSelected
                              ? 'glass-2 text-white bg-purple/30 border border-purple/50'
                              : 'glass text-muted hover:text-white hover:glass-2'
                          }`}
                        >
                          {tech}
                          {isSelected && (
                            <X size={14} className="inline-block ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Results Count */}
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-6 text-muted"
            >
              Showing {filteredProjects.length} of {projects.length} projects
            </motion.div>
          )}

          {/* Projects Grid - Creative Layout */}
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted mb-4">No projects found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 rounded-full glass-2 text-white hover:glass transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => {
              const isLarge = index % 7 === 0; // Every 7th project is large
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -30 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 120,
                    damping: 12,
                  }}
                  whileHover={{ y: -8, rotateX: 5 }}
                  className={`group cursor-pointer ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="glass-2 rounded-2xl overflow-hidden h-full hover:glass transition-all relative">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-purple/10 to-blue/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    
                    {/* Project Media/Placeholder */}
                    <div className={`relative ${isLarge ? 'h-64' : 'h-48'} bg-gradient-to-br from-pink/20 via-purple/20 to-blue/20 overflow-hidden`}>
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

                    <div className="p-6 relative z-10">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-purple transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted text-sm mb-4 line-clamp-2">{project.tagline}</p>
                      
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-lg glass"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-lg glass text-muted">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Stats or Description */}
                      {project.stats && project.stats.length > 0 ? (
                        <div className="flex gap-4 text-sm">
                          {project.stats.slice(0, 2).map((stat, i) => (
                            <div key={i} className="flex items-center gap-1">
                              <span className="text-purple font-bold">{stat.value}</span>
                              <span className="text-muted">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-muted line-clamp-2">{project.description}</p>
                      )}

                      {/* Links */}
                      <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
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
                  </div>
                </motion.div>
              );
            })}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

