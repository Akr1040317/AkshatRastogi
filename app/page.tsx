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

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
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
      <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-40">
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="glass-2 rounded-lg px-3 py-2 text-sm text-muted hover:text-white transition-colors flex items-center gap-2"
        >
          <kbd className="px-2 py-1 rounded glass border border-white/10 text-xs">⌘K</kbd>
          <span>Commands</span>
        </button>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink via-purple to-blue z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
