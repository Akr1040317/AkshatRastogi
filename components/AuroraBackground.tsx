'use client';

import { motion } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.28) 0%, transparent 70%)',
        }}
        animate={{
          x: ['-50%', '-40%', '-50%'],
          y: ['-50%', '-60%', '-50%'],
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 194, 77, 0.32) 0%, transparent 70%)',
        }}
        animate={{
          x: ['50%', '60%', '50%'],
          y: ['-50%', '-40%', '-50%'],
          scale: [1, 0.92, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(46, 107, 230, 0.16) 0%, transparent 70%)',
        }}
        animate={{
          x: ['-50%', '-45%', '-50%'],
          y: ['50%', '55%', '50%'],
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  );
}
