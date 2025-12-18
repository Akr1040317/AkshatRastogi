'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, ExternalLink, Github, Target, Lightbulb, Code, Trophy } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-bg-1 glass-2 border border-white/10 shadow-2xl transition-all">
                {/* Header */}
                <div className="glass-2 border-b border-white/10 p-6 flex items-start justify-between">
                  <div className="flex-1 min-w-0 pr-4">
                    <Dialog.Title className="text-3xl font-bold mb-2 gradient-text">
                      {project.name}
                    </Dialog.Title>
                    <p className="text-muted">{project.tagline}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg glass hover:glass-2 transition-all flex-shrink-0"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                  {/* Media */}
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
                        <h4 className="font-bold text-pink text-sm">Problem</h4>
                      </div>
                      <p className="text-sm text-muted">{project.problem}</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-purple/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb size={16} className="text-purple" />
                        <h4 className="font-bold text-purple text-sm">Solution</h4>
                      </div>
                      <p className="text-sm text-muted">{project.solution}</p>
                    </div>
                  </div>

                  {/* Technical Highlights */}
                  <div className="glass rounded-xl p-4 border border-blue/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Code size={16} className="text-blue" />
                      <h4 className="font-bold text-blue text-sm">Technical Highlights</h4>
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
                      <h4 className="font-bold text-orange text-sm">Outcome</h4>
                    </div>
                    <p className="text-sm text-muted">{project.outcome}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold mb-3 text-sm">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg glass text-xs">
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
                        className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-2 transition-all text-sm"
                      >
                        <ExternalLink size={16} className="text-purple" />
                        <span>Visit Website</span>
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
                        <span>View Code</span>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

