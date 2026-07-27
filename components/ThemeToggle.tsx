'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] glass-2 rounded-full p-3 shadow-hive hover:shadow-amber transition-shadow touch-manipulation"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative flex h-5 w-5 items-center justify-center text-amber-deep">
        <Sun
          size={18}
          className={`absolute transition-all duration-300 ${
            isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
          }`}
        />
        <Moon
          size={18}
          className={`absolute transition-all duration-300 ${
            isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
          }`}
        />
      </span>
    </motion.button>
  );
}
