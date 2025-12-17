'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, FolderKanban, Award, Mail } from 'lucide-react';
import clsx from 'clsx';

export type Module = 'overview' | 'projects' | 'experience' | 'leadership' | 'contact';

interface SidebarNavProps {
  currentModule: Module;
  onModuleChange: (module: Module) => void;
}

const navItems: { id: Module; label: string; icon: React.ComponentType<any> }[] = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'leadership', label: 'Leadership', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function SidebarNav({ currentModule, onModuleChange }: SidebarNavProps) {
  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-full w-20 flex-col items-center justify-center gap-6 z-50">
      <div className="glass-2 rounded-2xl p-4 flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentModule === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => onModuleChange(item.id)}
              className={clsx(
                'relative p-3 rounded-xl transition-all duration-200',
                isActive
                  ? 'text-white'
                  : 'text-muted hover:text-white'
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink/20 via-purple/20 to-blue/20"
                  layoutId="activeNav"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <Icon size={24} className="relative z-10" />
              <span className="absolute left-full ml-4 px-2 py-1 text-xs rounded-md glass-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}

