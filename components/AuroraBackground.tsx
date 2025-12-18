'use client';

import { motion } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Aurora 1 - Pink/Purple */}
      <motion.div
        className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 216, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: ['-50%', '-40%', '-50%'],
          y: ['-50%', '-60%', '-50%'],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora 2 - Purple/Blue */}
      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: ['50%', '60%', '50%'],
          y: ['-50%', '-40%', '-50%'],
          scale: [1, 0.9, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Aurora 3 - Blue */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(76, 201, 255, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          x: ['-50%', '-45%', '-50%'],
          y: ['50%', '55%', '50%'],
          scale: [1, 1.05, 1],
          opacity: [0.25, 0.45, 0.25],
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


