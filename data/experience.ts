export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Self-employed';
  description: string;
  highlights: string[];
  technologies: string[];
  website?: string;
}

export const experiences: Experience[] = [
  {
    id: 'honeywell',
    company: 'Honeywell Aerospace',
    role: 'Software Engineer I',
    location: 'Phoenix, AZ',
    startDate: 'Jun 2025',
    endDate: 'Present',
    type: 'Full-time',
    description:
      'Develop C software for Flight Management System in a safety-critical avionics environment, contributing to next-generation cockpits. Perform system, HLR, LLR, and SLR requirement updates and formalizations with full traceability aligned to DO-178C standards.',
    highlights: [
      'Extended the Netrikann remote-testing tool by adding touch-interaction and event-simulation features, enabling remote hardware-bench validation for global teams and reducing manual integration test effort.',
      'Perform system, HLR, LLR, and SLR requirement updates and formalizations with full traceability aligned to DO-178C standards.',
    ],
    technologies: ['C', 'DO-178C', 'Avionics', 'Flight Management Systems'],
  },
  {
    id: 'hive',
    company: 'Hive - Spell Intelligently',
    role: 'Co-Founder, CEO, Technical Lead (iOS & Web)',
    location: 'Lake Mary, FL → Remote',
    startDate: 'Jun 2023',
    endDate: 'Present',
    type: 'Self-employed',
    description:
      'Built Hive\'s iOS app and web platform used by 600+ students and piloted with multiple school districts, delivering 60+ pattern-based lessons and quizzes on roots, patterns, and language origins.',
    highlights: [
      'Established partnership with Merriam-Webster, integrating API with GPT-4 for sentence generation, explanations, and feedback.',
      'Engineered PrepCenter™, the official studying platform and technology & education partner for the Spelling Bee Championship UAE, with round-based word lists, four study modes, analytics, and leaderboards for hundreds of competitors.',
      'Developed a Next.js/Tailwind educator dashboard, optimized backend using API pagination, caching, lazy instantiation, Firebase, and Google Cloud Functions, and added custom list-creation tools while prototyping an SLM-based tutor for adaptive coaching.',
    ],
    technologies: [
      'Swift',
      'iOS',
      'Next.js',
      'Tailwind CSS',
      'React.js',
      'Firebase',
      'Google Cloud Functions',
      'GPT-4 API',
      'CloudKit',
      'REST APIs',
    ],
    website: 'https://hivespelling.com',
  },
  {
    id: 'siemens',
    company: 'Siemens Digital Industries Software',
    role: 'Intern → Part-time Software Engineer',
    location: 'Milford, OH → Remote',
    startDate: 'May 2024',
    endDate: 'Dec 2024',
    type: 'Part-time',
    description:
      'Developed a customer-facing feature in NX-CAD using C++ and HTML rendering to modernize the 2D Cross-Section View, enabling real-time cable layout visualization with color-coded data for industrial engineering projects.',
    highlights: [
      'Led sprint planning & task prioritization in a scrum-based Agile environment, collaborating with international teams to develop & integrate real-time data retrieval using Object Manager & C++, improving data accuracy & cost efficiency.',
      'Addressed production bugs, introduced a Multi-Tiered Labels feature, and implemented unit tests to ensure reliability.',
    ],
    technologies: ['C++', 'HTML', 'NX-CAD', 'Agile', 'Scrum', 'Object Manager'],
  },
  {
    id: 'marketatomy',
    company: 'MarketAtomy LLC',
    role: 'Intern → Part-time Software Engineer',
    location: 'Winter Springs, FL → Remote',
    startDate: 'Jan 2020',
    endDate: 'Jul 2023',
    type: 'Part-time',
    description:
      'Led full-stack web development of a 21-module business health assessment platform for optimizing business growth strategies.',
    highlights: [
      'Implemented a secure user login/registration system with OTP verification & hashing/encryption techniques.',
      'Employed PHP PDO with parameterized queries to secure the back end against XSS & SQLi attacks, while managing the MySQL database and generating server-side PDF reports for clients.',
    ],
    technologies: [
      'PHP',
      'JavaScript',
      'HTML',
      'CSS',
      'MySQL',
      'Bootstrap',
      'phpMyAdmin',
    ],
    website: 'https://marketatomy.com/bhc',
  },
  {
    id: 'codingforcharity',
    company: 'CodingForCharity',
    role: 'Founder, Executive Director, Full-stack Web Developer',
    location: 'Lake Mary, FL',
    startDate: 'Mar 2020',
    endDate: 'Dec 2021',
    type: 'Self-employed',
    description:
      'Founded CodingForCharity, an organization with 70+ members across 8 countries that fundraises for underprivileged children by building websites for businesses/non-profits in exchange for charity donations.',
    highlights: [
      'Implemented full-stack web development across e-commerce, paywalls, and mobile ordering, developed/managed 40+ websites.',
      'Received coverage from prominent local radio and TV stations in recognition of CodingForCharity\'s impact.',
    ],
    technologies: [
      'WordPress',
      'Full-Stack Development',
      'E-commerce',
      'Project Management',
      'PHP',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    website: 'https://codingforcharityorg.com',
  },
];

