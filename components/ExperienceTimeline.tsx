'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-6 pb-20 md:pb-8">
      {experiences.map((exp, i) => {
        const isExpanded = expandedId === exp.id;
        return (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="glass-2 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedId(isExpanded ? null : exp.id)}
              className="w-full p-6 text-left"
            >
              <div className="flex items-start justify-between gap-4">
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
                  <h4 className="text-xl text-purple mb-2">{exp.company}</h4>
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
                    <span className="px-2 py-1 rounded-full glass text-xs">
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
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 space-y-4 border-t border-white/10">
                    <p className="text-muted leading-relaxed">{exp.description}</p>

                    <div>
                      <h5 className="font-semibold mb-2 text-blue">Key Highlights</h5>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-purple mt-1">•</span>
                            <span className="text-muted">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-pink">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, j) => (
                          <span
                            key={j}
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
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}


