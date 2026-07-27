'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, FolderKanban, Award, Mail } from 'lucide-react';
import clsx from 'clsx';
import { Module } from './SidebarNav';

interface BottomNavProps {
  currentModule: Module;
  onModuleChange: (module: Module) => void;
}

const navItems: { id: Module; label: string; icon: React.ComponentType<any> }[] = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'leadership', label: 'Leadership', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function BottomNav({ currentModule, onModuleChange }: BottomNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="glass-2 border-t border-line">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentModule === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => onModuleChange(item.id)}
                className={clsx(
                  'flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all',
                  isActive ? 'text-amber-deep' : 'text-muted'
                )}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-deep via-amber to-amber-soft"
                    layoutId="activeBottomNav"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

