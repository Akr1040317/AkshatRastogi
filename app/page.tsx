'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SidebarNav from '@/components/SidebarNav';
import BottomNav from '@/components/BottomNav';
import CommandPalette from '@/components/CommandPalette';
import BackgroundSystem from '@/components/BackgroundSystem';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AnalyticsSection from '@/components/sections/AnalyticsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import ContactSection from '@/components/sections/ContactSection';

function CommandPaletteHint({ onOpen }: { onOpen: () => void }) {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  return (
    <motion.div 
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.button
        onClick={onOpen}
        className="glass-2 rounded-lg px-4 py-3 text-sm text-muted hover:text-white transition-colors flex items-center gap-3 relative group"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Arrow pointing down */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-purple">
            <path d="M10 3L10 17M10 17L4 11M10 17L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        
        <div className="flex items-center gap-2">
          <kbd className="px-2.5 py-1 rounded glass border border-white/20 text-xs font-mono">
            {isMac ? '⌘' : 'Ctrl'}
          </kbd>
          <span className="text-xs text-muted">+</span>
          <kbd className="px-2.5 py-1 rounded glass border border-white/20 text-xs font-mono">K</kbd>
        </div>
        <span className="text-xs">Commands</span>
      </motion.button>
    </motion.div>
  );
}

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMod = e.metaKey || e.ctrlKey;
      
      // Open command palette (only shortcut that works globally)
      if (isMod && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'analytics', 'projects', 'experience', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === 'hero' ? 'overview' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-0 text-text relative overflow-x-hidden">
      <BackgroundSystem />

      {/* Floating Navigation */}
      <SidebarNav 
        currentModule={activeSection as any} 
        onModuleChange={(module) => {
          const sectionMap: Record<string, string> = {
            overview: 'hero',
            projects: 'projects',
            experience: 'experience',
            leadership: 'leadership',
            contact: 'contact',
          };
          scrollToSection(sectionMap[module] || 'hero');
        }} 
      />
      <BottomNav 
        currentModule={activeSection as any} 
        onModuleChange={(module) => {
          const sectionMap: Record<string, string> = {
            overview: 'hero',
            projects: 'projects',
            experience: 'experience',
            leadership: 'leadership',
            contact: 'contact',
          };
          scrollToSection(sectionMap[module] || 'hero');
        }} 
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onModuleChange={(module) => {
          const sectionMap: Record<string, string> = {
            overview: 'hero',
            projects: 'projects',
            experience: 'experience',
            leadership: 'leadership',
            contact: 'contact',
          };
          scrollToSection(sectionMap[module] || 'hero');
          setCommandPaletteOpen(false);
        }}
      />

      {/* Main Content - Scrollable */}
      <main className="md:pl-20">
        <HeroSection />
        <SkillsSection />
        <AnalyticsSection />
        <ProjectsSection />
        <ExperienceSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      {/* Command Palette Hint */}
      <CommandPaletteHint onOpen={() => setCommandPaletteOpen(true)} />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink via-purple to-blue z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
