'use client';

import { 
  SiJavascript, SiTypescript, SiPython, SiSwift, SiCplusplus, SiC,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiBootstrap,
  SiFirebase, SiGooglecloud, SiVercel, SiGit, SiMysql, SiWordpress,
  SiHtml5, SiCss3, SiPhp, SiMongodb, SiXcode
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface SkillIconProps {
  skill: string;
  size?: number;
}

const skillIconMap: Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>> = {
  // Languages
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'Java': FaJava,
  'Java ': FaJava,
  'Swift': SiSwift,
  'C++': SiCplusplus,
  'C': SiC,
  'HTML/CSS': SiHtml5,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'PHP': SiPhp,
  'SQL': SiMysql,
  'R': SiPython,
  'Matlab': SiPython,
  
  // Frameworks
  'React.js': SiReact,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'WordPress': SiWordpress,
  
  // Tools
  'Firebase': SiFirebase,
  'Google Cloud': SiGooglecloud,
  'Vercel': SiVercel,
  'Git': SiGit,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'Xcode': SiXcode,
};

// Brand colors for each technology
const getBrandColor = (skill: string): string => {
  const brandColors: Record<string, string> = {
    // Languages
    'JavaScript': '#F7DF1E',
    'TypeScript': '#3178C6',
    'Python': '#3776AB',
    'Java': '#ED8B00',
    'Swift': '#FA7343',
    'C++': '#00599C',
    'C': '#A8B9CC',
    'HTML/CSS': '#E34F26',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'PHP': '#777BB4',
    'SQL': '#4479A1',
    'R': '#276DC3',
    'Matlab': '#0076A8',
    
    // Frameworks
    'React.js': '#61DAFB',
    'React': '#61DAFB',
    'Next.js': '#000000',
    'Node.js': '#339933',
    'Express.js': '#000000',
    'Tailwind CSS': '#06B6D4',
    'Bootstrap': '#7952B3',
    'WordPress': '#21759B',
    
    // Tools
    'Firebase': '#FFCA28',
    'Google Cloud': '#4285F4',
    'Vercel': '#000000',
    'Git': '#F05032',
    'MySQL': '#4479A1',
    'MongoDB': '#47A248',
    'Xcode': '#147EFB',
  };
  
  return brandColors[skill] || '#8B5CF6'; // Default purple
};

export default function SkillIcon({ skill, size = 20 }: SkillIconProps) {
  const IconComponent = skillIconMap[skill] || null;
  const brandColor = getBrandColor(skill);
  
  if (!IconComponent) {
    return (
      <div 
        className="w-5 h-5 rounded bg-gradient-to-br from-purple/30 to-pink/30 flex items-center justify-center text-xs font-bold"
        style={{ width: size, height: size }}
      >
        {skill.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <IconComponent 
      size={size} 
      color={brandColor}
      className="transition-all group-hover:scale-110"
    />
  );
}
