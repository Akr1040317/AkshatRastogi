'use client';

import { motion } from 'framer-motion';
import { MapPin, Code, Rocket } from 'lucide-react';
import { skills } from '@/data/skills';
import { education, certifications } from '@/data/education';

export default function OverviewPanel() {
  return (
    <div className="space-y-8 pb-20 md:pb-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">Akshat Rastogi</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-6">
          Software Engineer I @ Honeywell Aerospace | Co-Founder @ Hive
        </p>
        <p className="text-lg text-muted max-w-2xl mb-8">
          Building products that matter. Currently developing avionics software for next-generation cockpits
          and scaling Hive, an education platform helping students master spelling through pattern recognition.
        </p>

        {/* Current Status */}
        <div className="glass-2 rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-blue" />
              <span className="text-muted">Phoenix, AZ</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={20} className="text-purple" />
              <span className="text-muted">Building: Avionics tooling + Hive scaling</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket size={20} className="text-pink" />
              <span className="text-muted">Interests: Product, Education, Cricket</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-2 rounded-xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">{education.school}</h3>
            <p className="text-muted">{education.degree}</p>
            <p className="text-sm text-muted">{education.location} • {education.startDate} - {education.endDate}</p>
            {education.details && (
              <div className="mt-2 flex flex-wrap gap-2">
                {education.details.map((detail, i) => (
                  <span key={i} className="px-3 py-1 rounded-full glass text-sm">
                    {detail}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-2 rounded-xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-2 text-purple">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full glass text-sm hover:glass-2 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      {certifications.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-2 rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted">{cert.issuer} • {cert.issueDate}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}


