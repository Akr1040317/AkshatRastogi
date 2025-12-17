'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ExternalLink, MapPin, Calendar, Briefcase } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Briefcase className="text-purple" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Experience</span>
            </h2>
          </div>
          <p className="text-xl text-muted">Where I've worked and what I've built</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink via-purple to-blue opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 80,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full glass-2 border-4 border-purple flex items-center justify-center bg-bg-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink to-purple" />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-purple to-blue opacity-30" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <motion.div
                      className="glass-2 rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                        className="w-full p-6 text-left"
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold">{exp.role}</h3>
                              {exp.website && (
                                <a
                                  href={exp.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="p-1 rounded-lg glass hover:glass-2 transition-all"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              )}
                            </div>
                            <h4 className="text-xl text-purple mb-3">{exp.company}</h4>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                <span>{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>
                                  {exp.startDate} - {exp.endDate}
                                </span>
                              </div>
                              <span className="px-3 py-1 rounded-full glass text-xs">
                                {exp.type}
                              </span>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={24} className="text-muted" />
                          </motion.div>
                        </div>

                        <p className="text-muted leading-relaxed">{exp.description}</p>
                      </button>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-white/10"
                        >
                          <div className="p-6 space-y-6">
                            {/* Highlights */}
                            <div>
                              <h5 className="font-semibold mb-3 text-blue flex items-center gap-2">
                                <span className="w-1 h-4 bg-blue rounded-full" />
                                Key Highlights
                              </h5>
                              <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-purple mt-1">•</span>
                                    <span className="text-muted">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="font-semibold mb-3 text-pink flex items-center gap-2">
                                <span className="w-1 h-4 bg-pink rounded-full" />
                                Technologies
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 rounded-full glass text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

