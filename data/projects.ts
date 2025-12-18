export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'featured' | 'lab';
  startDate: string;
  endDate?: string;
  role: string;
  problem: string;
  solution: string;
  technicalHighlights: string[];
  outcome: string;
  technologies: string[];
  links: {
    website?: string;
    github?: string;
    appStore?: string;
    demo?: string;
  };
  media?: {
    type: 'image' | 'video';
    url: string;
    alt: string;
  }[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'hive-website',
    name: 'Hive Website & Educator Dashboard',
    tagline: 'Next.js platform for educators and students',
    description:
      'Comprehensive web platform with educator dashboard, optimized backend, and custom list-creation tools. Prototyping SLM-based tutor for adaptive coaching.',
    category: 'featured',
    startDate: 'Jun 2023',
    endDate: 'Present',
    role: 'Technical Lead & Full-stack Developer',
    problem:
      'Educators needed a web platform to manage students, create custom word lists, and track progress. The platform needed to scale efficiently.',
    solution:
      'Developed a Next.js/Tailwind educator dashboard with optimized backend using API pagination, caching, lazy instantiation, Firebase, and Google Cloud Functions. Added custom list-creation tools and prototyping an SLM-based tutor.',
    technicalHighlights: [
      'Next.js with App Router',
      'Tailwind CSS for modern UI',
      'API pagination and caching strategies',
      'Lazy instantiation for performance',
      'Firebase real-time database',
      'Google Cloud Functions',
      'Custom list creation tools',
      'SLM-based tutor prototype',
    ],
    outcome:
      'Scalable platform supporting educators and students with advanced features and optimized performance.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'React.js',
      'Firebase',
      'Google Cloud Functions',
      'Node.js',
    ],
    links: {
      website: 'https://www.hivespelling.com',
    },
    media: [
      {
        type: 'image',
        url: '/projects/HiveSpelling.com.png',
        alt: 'Hive Website - Educator dashboard with student management and analytics',
      },
    ],
  },
  {
    id: 'hive-prepcenter',
    name: 'PrepCenter UAE',
    tagline: 'Official studying platform for Spelling Bee Championship UAE',
    description:
      'The official studying platform and technology & education partner for the Spelling Bee Championship UAE, featuring round-based word lists, four study modes, analytics, and leaderboards.',
    category: 'featured',
    startDate: '2024',
    role: 'Technical Lead & Developer',
    problem:
      'Competitors needed a comprehensive, official platform to prepare for the Spelling Bee Championship UAE with structured study materials and progress tracking.',
    solution:
      'Built a Next.js web platform with Firebase backend, featuring round-based word lists, multiple study modes (flashcards, practice tests, spelling challenges, word origins), real-time analytics, and competitive leaderboards.',
    technicalHighlights: [
      'Next.js with Tailwind CSS for responsive, modern UI',
      'Firebase for real-time data synchronization',
      'Google Cloud Functions for backend processing',
      'Advanced analytics dashboard for progress tracking',
      'Leaderboard system with real-time updates',
    ],
    outcome:
      'Successfully launched as the official platform, serving hundreds of competitors with comprehensive study tools and analytics.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Firebase',
      'Google Cloud Functions',
      'React.js',
    ],
    links: {
      website: 'https://learn.spellingbee.ae',
    },
    media: [
      {
        type: 'image',
        url: '/projects/PrepCenter.com.png',
        alt: 'PrepCenter UAE - Official Spelling Bee Championship platform with word lists and quiz sets',
      },
    ],
    stats: [
      { label: 'Competitors', value: 'Hundreds' },
      { label: 'Study Modes', value: '4' },
    ],
  },
  {
    id: 'hive-app',
    name: 'Hive iOS App',
    tagline: 'Pattern-based spelling education platform',
    description:
      'iOS app delivering 60+ pattern-based lessons and quizzes on roots, patterns, and language origins, used by 600+ students and piloted with multiple school districts.',
    category: 'featured',
    startDate: 'Jun 2023',
    endDate: 'Present',
    role: 'Co-Founder & iOS Developer',
    problem:
      'Students struggle with spelling due to lack of understanding of word patterns, roots, and language origins. Traditional methods are rote memorization.',
    solution:
      'Built an iOS app that teaches spelling through pattern recognition, word roots, and etymology. Integrated Merriam-Webster API and GPT-4 for intelligent sentence generation and explanations.',
    technicalHighlights: [
      'Native iOS development with Swift',
      'CloudKit for data synchronization',
      'Merriam-Webster API integration',
      'GPT-4 integration for adaptive learning',
      'Pattern-based lesson system',
      'Progress tracking and analytics',
    ],
    outcome:
      '600+ active students, partnerships with multiple school districts, and 60+ comprehensive lessons delivered.',
    technologies: [
      'Swift',
      'iOS',
      'CloudKit',
      'SwiftUI',
      'Merriam-Webster API',
      'GPT-4 API',
    ],
    links: {
      appStore: 'https://apps.apple.com/us/app/hive-spelling-bee-prep-app/id6479415050',
      website: 'https://www.hivespelling.com',
    },
    media: [
      {
        type: 'image',
        url: '/projects/HiveIOSApp.png',
        alt: 'Hive iOS App - Spelling Bee Prep App dashboard showing learning tracks and progress',
      },
    ],
    stats: [
      { label: 'Students', value: '600+' },
      { label: 'Lessons', value: '60+' },
      { label: 'School Districts', value: 'Multiple' },
    ],
  },
  {
    id: 'codingforcharity',
    name: 'CodingForCharity',
    tagline: 'Building websites for charity donations',
    description:
      'Founded an organization with 70+ members across 8 countries that fundraises for underprivileged children by building websites for businesses/non-profits in exchange for charity donations.',
    category: 'featured',
    startDate: 'Mar 2020',
    endDate: 'Dec 2021',
    role: 'Founder, Executive Director, Full-stack Developer',
    problem:
      'Small businesses and non-profits needed websites but couldn\'t afford them, while underprivileged children needed support.',
    solution:
      'Created a platform connecting volunteer developers with businesses/non-profits. Built 40+ websites with e-commerce, paywalls, and mobile ordering capabilities in exchange for charity donations.',
    technicalHighlights: [
      'Full-stack web development',
      'E-commerce integration',
      'Payment processing',
      'Mobile ordering systems',
      'WordPress customization',
      'Project management system',
    ],
    outcome:
      '70+ members across 8 countries, 40+ websites developed, received coverage from prominent local radio and TV stations.',
    technologies: [
      'WordPress',
      'PHP',
      'JavaScript',
      'HTML',
      'CSS',
      'E-commerce',
      'Payment APIs',
    ],
    links: {
      website: 'https://codingforcharityorg.com',
    },
    stats: [
      { label: 'Members', value: '70+' },
      { label: 'Countries', value: '8' },
      { label: 'Websites Built', value: '40+' },
    ],
  },
  {
    id: 'gathr',
    name: 'Gathr - Campus Involvement App',
    tagline: 'Connecting clubs and students on campus',
    description:
      'Launched a campus engagement iOS app with a social media-like interface connecting clubs and students, gaining 700+ UF students, 60+ organizations, and 20,000+ views on social media campaigns within the first 3 weeks.',
    category: 'featured',
    startDate: 'Apr 2024',
    endDate: 'Nov 2024',
    role: 'Co-Founder, iOS Developer, Head of Marketing',
    problem:
      'UF students struggled to discover and engage with campus organizations. There was no centralized platform for club-student interaction.',
    solution:
      'Built an iOS app with social media-like interface, Firebase Authentication with GatorLink login for UF-student-only access, push notifications via FCM, and Google Analytics integration.',
    technicalHighlights: [
      'Native iOS development',
      'Firebase Authentication',
      'GatorLink SSO integration',
      'Push notifications (FCM)',
      'Google Analytics',
      'Social media-like feed',
      'Club discovery and filtering',
    ],
    outcome:
      '700+ UF students, 60+ organizations, 20,000+ social media views within first 3 weeks.',
    technologies: [
      'Swift',
      'iOS',
      'Firebase',
      'FCM',
      'Google Analytics',
      'SwiftUI',
    ],
    links: {
      website: 'https://getgathr.app',
    },
    media: [
      {
        type: 'image',
        url: '/projects/gathr.png',
        alt: 'Gathr - Campus involvement app landing page showing event details and campus community features',
      },
    ],
    stats: [
      { label: 'Students', value: '700+' },
      { label: 'Organizations', value: '60+' },
      { label: 'Social Views', value: '20,000+' },
    ],
  },
  {
    id: 'internify',
    name: 'Internify',
    tagline: 'Job and internship search engine',
    description:
      'Web application using the MERN stack to create a job/internship search engine with real-time job postings from LinkedIn, Indeed, and ZipRecruiter.',
    category: 'featured',
    startDate: 'Dec 2022',
    endDate: 'Mar 2023',
    role: 'Co-Founder, Full-stack Developer',
    problem:
      'Students needed a centralized platform to search for jobs and internships across multiple sources with application tracking.',
    solution:
      'Built a MERN stack application that aggregates job postings from LinkedIn, Indeed, and ZipRecruiter using external Search APIs, populates MongoDB, and provides a user dashboard with filtering and application tracking.',
    technicalHighlights: [
      'MERN stack (MongoDB, Express, React, Node.js)',
      'External API integration (LinkedIn, Indeed, ZipRecruiter)',
      'Real-time job aggregation',
      'MongoDB database design',
      'User authentication and authorization',
      'Job filtering and search',
      'Application progress tracking',
    ],
    outcome:
      'Successfully launched job search platform with real-time aggregation and user tracking capabilities.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'REST APIs',
      'Mongoose',
    ],
    links: {},
  },
  {
    id: 'marketatomy',
    name: 'MarketAtomy Business Health Platform',
    tagline: '21-module business health assessment platform',
    description:
      'Led full-stack web development of a 21-module business health assessment platform for optimizing business growth strategies.',
    category: 'featured',
    startDate: 'Jan 2020',
    endDate: 'Jul 2023',
    role: 'Software Engineer',
    problem:
      'Businesses needed a comprehensive platform to assess their health across multiple dimensions and receive actionable insights.',
    solution:
      'Developed a 21-module assessment platform with secure authentication (OTP verification, hashing/encryption), PHP PDO with parameterized queries for security, MySQL database management, and server-side PDF report generation.',
    technicalHighlights: [
      '21-module assessment system',
      'Secure authentication with OTP',
      'Hashing and encryption',
      'PHP PDO with parameterized queries',
      'XSS and SQL injection prevention',
      'MySQL database management',
      'Server-side PDF generation',
      'Data analysis and reporting',
    ],
    outcome:
      'Successfully deployed platform helping businesses optimize growth strategies through comprehensive health assessments.',
    technologies: [
      'PHP',
      'JavaScript',
      'HTML',
      'CSS',
      'MySQL',
      'Bootstrap',
      'phpMyAdmin',
      'PDF Generation',
    ],
    links: {
      website: 'https://www.marketatomy.com/bhc',
    },
    media: [
      {
        type: 'image',
        url: '/projects/marketatomy.png',
        alt: 'MarketAtomy Business Health Check - Dashboard showing business health scores across 21 modules',
      },
    ],
    stats: [
      { label: 'Modules', value: '21' },
    ],
  },
  {
    id: 'ipl-simulation',
    name: 'IPL Simulation Software',
    tagline: 'Cricket tournament simulation',
    description:
      'Software to simulate IPL cricket tournaments with realistic match outcomes and statistics.',
    category: 'lab',
    startDate: '2023',
    role: 'Developer',
    problem: 'Need for a realistic IPL tournament simulator.',
    solution: 'Built simulation software with statistical modeling.',
    technicalHighlights: [
      'Statistical modeling',
      'Match simulation algorithms',
      'Data visualization',
    ],
    outcome: 'Functional IPL simulation tool.',
    technologies: ['Python', 'Data Analysis', 'Statistics'],
    links: {
      website: 'https://ipl-2025-beta.vercel.app',
    },
    media: [
      {
        type: 'image',
        url: '/projects/ipl.png',
        alt: 'IPL 2025 Simulation - Cricket tournament standings and match predictions',
      },
    ],
  },
  {
    id: 'nextgenwellness',
    name: 'NextGenWellness',
    tagline: 'Health and wellness platform',
    description: 'Health and wellness tracking and management platform.',
    category: 'lab',
    startDate: '2023',
    role: 'Developer',
    problem: 'Health tracking platform needed.',
    solution: 'Built wellness tracking application.',
    technicalHighlights: [
      'Health tracking',
      'Data visualization',
      'User dashboards',
    ],
    outcome: 'Wellness platform prototype.',
    technologies: ['React.js', 'Node.js', 'Health APIs'],
    links: {
      website: 'https://next-gen-wellness.vercel.app',
    },
    media: [
      {
        type: 'image',
        url: '/projects/nextGen.png',
        alt: 'NextGen Wellness - Health and wellness platform with fitness tracking dashboard',
      },
    ],
  },
  {
    id: 'gatortrips',
    name: 'GatorTrips',
    tagline: 'Travel planning for UF students',
    description: 'Travel planning and booking platform for University of Florida students.',
    category: 'lab',
    startDate: '2023',
    role: 'Developer',
    problem: 'UF students needed a travel planning platform.',
    solution: 'Built travel planning web application.',
    technicalHighlights: [
      'Travel API integration',
      'Booking system',
      'Student discounts',
    ],
    outcome: 'Travel platform prototype.',
    technologies: ['Next.js', 'Travel APIs', 'Payment Processing'],
    links: {
      website: 'https://gator-trips.vercel.app',
    },
    media: [
      {
        type: 'image',
        url: '/projects/gatortrips.png',
        alt: 'GatorTrips - Travel planning platform for UF students with trip booking interface',
      },
    ],
  },
];

