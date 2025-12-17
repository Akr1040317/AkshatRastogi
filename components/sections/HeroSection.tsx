'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Code, Rocket } from 'lucide-react';
import { education } from '@/data/education';

export default function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Akshat Rastogi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-muted mb-4"
        >
          Software Engineer I @ Honeywell Aerospace
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-purple mb-8"
        >
          Co-Founder & CEO @ Hive
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Building products that matter. Currently developing avionics software for next-generation cockpits
          and scaling Hive, an education platform helping students master spelling through pattern recognition.
        </motion.p>

        {/* Status Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="glass-2 rounded-full px-6 py-3 flex items-center gap-2">
            <MapPin size={18} className="text-blue" />
            <span className="text-sm">Phoenix, AZ</span>
          </div>
          <div className="glass-2 rounded-full px-6 py-3 flex items-center gap-2">
            <Code size={18} className="text-purple" />
            <span className="text-sm">Building Software</span>
          </div>
          <div className="glass-2 rounded-full px-6 py-3 flex items-center gap-2">
            <Rocket size={18} className="text-pink" />
            <span className="text-sm">Open to Opportunities</span>
          </div>
        </motion.div>

        {/* Education Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-2 rounded-xl p-6 max-w-md mx-auto mb-12"
        >
          <p className="text-sm text-muted mb-2">Education</p>
          <p className="font-semibold">{education.degree}</p>
          <p className="text-sm text-muted">{education.school}</p>
          <p className="text-xs text-muted mt-1">{education.startDate} - {education.endDate}</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-muted hover:text-white transition-colors group"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={24} className="group-hover:text-purple transition-colors" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}

