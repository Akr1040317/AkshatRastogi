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
    id: 'hive',
    company: 'Hive Education',
    role: 'Co-Founder, Technical Lead (iOS & Web)',
    location: 'Orlando, FL / Remote',
    startDate: 'Jun 2023',
    endDate: 'Present',
    type: 'Full-time',
    description:
      'Building Hive, a pattern-based K-8 literacy platform used by 1500+ students across 3 countries. Curriculum designed with a former Top-5 Scripps National Spelling Bee finalist.',
    highlights: [
      'Built Hive\'s iOS app and web platform (Hive 2.0 student and parent dashboards, lessons, quizzes, BeeReady, Family links, Stripe billing) used by 1500+ users across the US, UAE, and Oman.',
      'Engineered PrepCenter with The Spelling Bee Championship as the official studying and quizzing platform for Oman Spelling Bee 2026 (launched Jan 10, 2026), supporting the UAE and Oman competition ecosystem including learn.spellingbee.ae. 1000+ users in the UAE; all top-3 UAE spellers studied with Hive.',
      'At the 2026 Scripps National Spelling Bee, 19 Hive students competed: 14 placed in the top 100, 7 reached the quarterfinals, and 3 made the semis. All but 4 were competing at nationals for the first time.',
      'Shipping adaptive AI tutoring on top of owned curriculum: kid-safe pattern chat, struggle detection, and auto-assigned lessons, quizzes, and daily plans.',
    ],
    technologies: [
      'React',
      'Vite',
      'Swift',
      'iOS',
      'Firebase',
      'Vercel',
      'Stripe',
      'OpenAI',
      'Google Cloud TTS',
      'Expo',
    ],
    website: 'https://www.hivespelling.com',
  },
  {
    id: 'honeywell',
    company: 'Honeywell Aerospace',
    role: 'Software Engineer I',
    location: 'Phoenix, AZ',
    startDate: 'Jun 2025',
    endDate: 'Jun 2026',
    type: 'Full-time',
    description:
      'Developed C software for Flight Management System in a safety-critical avionics environment, contributing to next-generation cockpits.',
    highlights: [
      'Developed C software for Flight Management System in a safety-critical avionics environment, contributing to next-generation cockpits.',
      'Performed system, HLR, LLR, and SLR requirement updates and formalizations with full traceability aligned to DO-178C standards.',
      'Extended the Netrikann remote-testing tool by adding touch-interaction and event-simulation features, enabling remote hardware-bench validation for global teams and reducing manual integration test effort.',
    ],
    technologies: ['C', 'DO-178C', 'Avionics', 'Flight Management Systems'],
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
      'Developed a customer-facing feature in NX-CAD using C++ and HTML rendering to modernize the 2D Cross-Section View, enabling real-time cable layout visualization with color-coded data for industrial engineering projects.',
      'Led sprint planning and task prioritization in a scrum-based Agile environment, collaborating with international teams to develop and integrate real-time data retrieval using Object Manager and C++, improving data accuracy and cost efficiency.',
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
      'Led full-stack web development of a 21-module business health assessment platform for optimizing business growth strategies.',
      'Implemented a secure user login/registration system with OTP verification and hashing/encryption techniques.',
      'Employed PHP PDO with parameterized queries to secure the back end against XSS and SQLi attacks, while managing the MySQL database and generating server-side PDF reports for clients.',
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
      'Founded CodingForCharity during COVID: student developers built free websites for small businesses and non-profits in exchange for charity donations supporting underprivileged children.',
    highlights: [
      'Grew to 70+ members across 8 countries and launched 40+ websites, teaching members to code before they shipped.',
      'Won the first client after cold calls and credibility hurdles, then scaled through local media including Spectrum News 13 Everyday Hero.',
      'Built the organization site and multiple client sites end to end (WordPress, e-commerce, paywalls, mobile ordering).',
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
  },
];
