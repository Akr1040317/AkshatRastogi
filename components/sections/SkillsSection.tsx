'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/skills';
import SkillIcon from '@/components/SkillIcon';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => {
            return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: categoryIndex * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              className="glass-2 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-white rounded-full" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <div className="glass rounded-xl px-4 py-3 flex items-center gap-2 hover:glass-2 transition-all cursor-pointer">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <SkillIcon skill={skill} />
                      </motion.div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

