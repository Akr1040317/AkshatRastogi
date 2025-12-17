'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, Briefcase, FolderKanban, Award, Mail, ExternalLink, Copy, FileText } from 'lucide-react';
import { Module } from './SidebarNav';

interface Command {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  action: () => void;
  category: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onModuleChange: (module: Module) => void;
}

export default function CommandPalette({ isOpen, onClose, onModuleChange }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  const commands: Command[] = [
    { id: 'overview', label: 'Go to Overview', icon: Home, action: () => { onModuleChange('overview'); onClose(); }, category: 'Navigation' },
    { id: 'projects', label: 'Go to Projects', icon: FolderKanban, action: () => { onModuleChange('projects'); onClose(); }, category: 'Navigation' },
    { id: 'experience', label: 'Go to Experience', icon: Briefcase, action: () => { onModuleChange('experience'); onClose(); }, category: 'Navigation' },
    { id: 'leadership', label: 'Go to Leadership', icon: Award, action: () => { onModuleChange('leadership'); onClose(); }, category: 'Navigation' },
    { id: 'contact', label: 'Go to Contact', icon: Mail, action: () => { onModuleChange('contact'); onClose(); }, category: 'Navigation' },
    { id: 'copy-email', label: 'Copy Email', icon: Copy, action: () => { navigator.clipboard.writeText('rastogia@ufl.edu'); onClose(); }, category: 'Actions' },
    { id: 'linkedin', label: 'Open LinkedIn', icon: ExternalLink, action: () => { window.open('https://linkedin.com/in/akshat-rastogi', '_blank'); onClose(); }, category: 'Actions' },
    { id: 'github', label: 'Open GitHub', icon: ExternalLink, action: () => { window.open('https://github.com/Akr1040317', '_blank'); onClose(); }, category: 'Actions' },
    { id: 'resume', label: 'Open Resume', icon: FileText, action: () => { /* Add resume link */ onClose(); }, category: 'Actions' },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Will be handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-[101]"
          >
            <div className="glass-2 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Search size={20} className="text-muted" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-muted"
                  autoFocus
                />
                <kbd className="px-2 py-1 text-xs rounded glass border border-white/10">ESC</kbd>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd) => {
                      const Icon = cmd.icon;
                      return (
                        <motion.button
                          key={cmd.id}
                          onClick={cmd.action}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-left"
                          whileHover={{ x: 4 }}
                        >
                          <Icon size={20} className="text-muted" />
                          <div className="flex-1">
                            <div className="text-white">{cmd.label}</div>
                            <div className="text-xs text-muted">{cmd.category}</div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted">No commands found</div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

