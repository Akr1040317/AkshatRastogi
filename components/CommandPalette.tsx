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
  shortcut?: string; // e.g., "⌘R" or "Ctrl+R"
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onModuleChange: (module: Module) => void;
}

export default function CommandPalette({ isOpen, onClose, onModuleChange }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const getShortcut = (key: string, modifier: string = 'mod') => {
    if (modifier === 'mod') {
      return isMac ? `⌘${key}` : `Ctrl+${key}`;
    }
    return isMac ? `⌘${key}` : `Ctrl+${key}`;
  };

  const commands: Command[] = [
    { id: 'overview', label: 'Go to Overview', icon: Home, action: () => { onModuleChange('overview'); onClose(); }, category: 'Navigation', shortcut: getShortcut('1') },
    { id: 'projects', label: 'Go to Projects', icon: FolderKanban, action: () => { onModuleChange('projects'); onClose(); }, category: 'Navigation', shortcut: getShortcut('2') },
    { id: 'experience', label: 'Go to Experience', icon: Briefcase, action: () => { onModuleChange('experience'); onClose(); }, category: 'Navigation', shortcut: getShortcut('3') },
    { id: 'leadership', label: 'Go to Leadership', icon: Award, action: () => { onModuleChange('leadership'); onClose(); }, category: 'Navigation', shortcut: getShortcut('4') },
    { id: 'contact', label: 'Go to Contact', icon: Mail, action: () => { onModuleChange('contact'); onClose(); }, category: 'Navigation', shortcut: getShortcut('5') },
    { id: 'copy-email', label: 'Copy Email', icon: Copy, action: () => { navigator.clipboard.writeText('akshatrdev@gmail.com'); onClose(); }, category: 'Actions', shortcut: getShortcut('E') },
    { id: 'linkedin', label: 'Open LinkedIn', icon: ExternalLink, action: () => { window.open('https://linkedin.com/in/akshat-rastogi', '_blank'); onClose(); }, category: 'Actions', shortcut: getShortcut('L') },
    { id: 'github', label: 'Open GitHub', icon: ExternalLink, action: () => { window.open('https://github.com/Akr1040317', '_blank'); onClose(); }, category: 'Actions', shortcut: getShortcut('G') },
    { id: 'resume', label: 'Open Resume', icon: FileText, action: () => { window.open('/Akshat_Rastogi_Resume.pdf', '_blank'); onClose(); }, category: 'Actions', shortcut: getShortcut('R') },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      const isMod = e.metaKey || e.ctrlKey;
      
      // Close palette
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // Handle shortcuts only when palette is open
      if (isMod && e.key === '1') {
        e.preventDefault();
        onModuleChange('overview');
        onClose();
      } else if (isMod && e.key === '2') {
        e.preventDefault();
        onModuleChange('projects');
        onClose();
      } else if (isMod && e.key === '3') {
        e.preventDefault();
        onModuleChange('experience');
        onClose();
      } else if (isMod && e.key === '4') {
        e.preventDefault();
        onModuleChange('leadership');
        onClose();
      } else if (isMod && e.key === '5') {
        e.preventDefault();
        onModuleChange('contact');
        onClose();
      } else if (isMod && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        navigator.clipboard.writeText('akshatrdev@gmail.com');
        onClose();
      } else if (isMod && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        window.open('https://linkedin.com/in/akshat-rastogi', '_blank');
        onClose();
      } else if (isMod && e.key.toLowerCase() === 'g') {
        e.preventDefault();
        window.open('https://github.com/Akr1040317', '_blank');
        onClose();
      } else if (isMod && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        window.open('/Akshat_Rastogi_Resume.pdf', '_blank');
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onModuleChange]);

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
                          className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-left group"
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <Icon size={20} className="text-muted" />
                            <div className="flex-1">
                              <div className="text-white">{cmd.label}</div>
                              <div className="text-xs text-muted">{cmd.category}</div>
                            </div>
                          </div>
                          {cmd.shortcut && (
                            <div className="flex items-center gap-1">
                              {cmd.shortcut.includes('+') ? (
                                cmd.shortcut.split('+').map((key, idx, arr) => (
                                  <span key={idx} className="flex items-center gap-1">
                                    <kbd className="px-2 py-1 text-xs rounded glass border border-white/20 font-mono text-muted">
                                      {key}
                                    </kbd>
                                    {idx < arr.length - 1 && <span className="text-xs text-muted/50">+</span>}
                                  </span>
                                ))
                              ) : (
                                <kbd className="px-2 py-1 text-xs rounded glass border border-white/20 font-mono text-muted">
                                  {cmd.shortcut}
                                </kbd>
                              )}
                            </div>
                          )}
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

