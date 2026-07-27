'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { education } from '@/data/education';
import HeroHexField from '@/components/HeroHexField';

export default function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-[100svh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 pb-28 md:pb-24 relative overflow-hidden"
    >
      <HeroHexField />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 w-full relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 break-words"
        >
          <span className="gradient-text">Akshat Rastogi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl text-text font-semibold"
        >
          Co-Founder & Technical Lead @ Hive
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-muted mb-4 sm:mb-6"
        >
          Former Software Engineer I @ Honeywell Aerospace
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed px-1"
        >
          Building Hive, a pattern-based literacy platform for K-8. Built with a former Top-5 Scripps
          finalist. 1500+ users across 3 countries. At Scripps 2026, 14 of our students placed in the top 100.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass-2 rounded-hive p-5 sm:p-6 max-w-md mx-auto"
        >
          <p className="eyebrow mb-2">Education</p>
          <p className="font-display font-semibold text-base sm:text-lg leading-snug">{education.degree}</p>
          <p className="text-sm text-muted mt-1">{education.school}</p>
          <p className="text-xs text-muted mt-1">
            {education.startDate} - {education.endDate}
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-2 text-muted hover:text-text transition-colors mx-auto pt-2"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown size={22} className="group-hover:text-purple transition-colors animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
}
