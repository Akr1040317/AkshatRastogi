export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: [
      'Java',
      'Python',
      'SQL',
      'JavaScript',
      'HTML/CSS',
      'R',
      'PHP',
      'Matlab',
      'C',
      'C++',
      'Swift',
      'TypeScript',
    ],
  },
  {
    category: 'Frameworks',
    items: [
      'WordPress',
      'Bootstrap',
      'CloudKit',
      'Next.js',
      'Materialize',
      'SwiftyJSON',
      'Tailwind CSS',
      'React.js',
      'Node.js',
      'Express.js',
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      'Git',
      'Google Firebase',
      'Xcode',
      'phpMyAdmin',
      'Kanban',
      'MySQL',
      'Agile Methodologies',
      'Vercel',
      'Google Cloud',
    ],
  },
  {
    category: 'Libraries',
    items: [
      'PyTorch',
      'PyTorch Geometric',
      'Core Data',
      'jQuery',
      'ChatGPT-4.0 API',
      'Google FCM',
    ],
  },
];

