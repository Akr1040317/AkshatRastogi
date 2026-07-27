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
    name: 'Hive',
    tagline: 'Pattern-based literacy platform for K-8',
    description:
      'Hive teaches spelling, vocabulary, reading, and writing through Science of Reading-aligned patterns and language of origin, not flashcard memorization. Live product with student and parent dashboards, BeeReady competition prep, Family links, and Stripe memberships. Curriculum created with a former Top-5 Scripps National Spelling Bee finalist.',
    category: 'featured',
    startDate: 'Jun 2023',
    endDate: 'Present',
    role: 'Co-Founder & Technical Lead',
    problem:
      'Most spelling instruction is rote memorization. Kids forget lists and never learn why English looks the way it does. Parents and schools need tutor-quality literacy practice at consumer scale.',
    solution:
      'Built the full Hive web platform and Hive 2.0 dashboards: placement diagnostics, pattern lessons and quizzes, Today\'s Plan, streaks, BeeReady cohorts (diagnostics, weekly reports, mock bees), Family parent accounts, and paid Plus/Elite memberships. Next layer is adaptive AI tutoring on top of this curriculum and learner data.',
    technicalHighlights: [
      'React + Vite student and marketing surfaces',
      'Firebase Auth and Firestore learner model',
      'Stripe Checkout and Customer Portal',
      'Vercel serverless APIs and Cloud Functions',
      'Google Cloud TTS pronunciation',
      'OpenAI tooling for content classification',
      'Hive Family parent linking',
      '4 game modes for longer study sessions',
    ],
    outcome:
      '1500+ users across 3 countries. At Scripps 2026, 19 Hive students competed: 14 top 100, 7 quarterfinals, 3 semis. Building toward an adaptive AI literacy tutor.',
    technologies: [
      'React',
      'Vite',
      'Firebase',
      'Stripe',
      'Vercel',
      'OpenAI',
      'Tailwind CSS',
      'PostHog',
    ],
    links: {
      website: 'https://www.hivespelling.com',
    },
    media: [
      {
        type: 'image',
        url: '/projects/HiveSpelling.com.png',
        alt: 'Hive Education platform homepage and learning product',
      },
    ],
    stats: [
      { label: 'Users', value: '1500+' },
      { label: 'Countries', value: '3' },
      { label: 'Scripps Top 100', value: '14' },
    ],
  },
  {
    id: 'hive-prepcenter',
    name: 'PrepCenter',
    tagline: 'Official studying platform for national spelling bees',
    description:
      'PrepCenter is Hive\'s official studying and quizzing platform built with The Spelling Bee Championship for Oman Spelling Bee 2026, and supports the UAE competition ecosystem. Round-based word lists, quizzes, analytics, and leaderboards.',
    category: 'featured',
    startDate: '2025',
    endDate: 'Present',
    role: 'Technical Lead & Developer',
    problem:
      'National bee organizers needed real competition infrastructure, not another generic flashcard app: official lists by round, quizzes, and progress tools students actually use.',
    solution:
      'Shipped PrepCenter with Firebase-backed study flows, prelims and finals word lists, four study modes, analytics, and leaderboards. Live at learn.spellingbee.ae for the UAE/Oman ecosystem. Official Oman platform launched January 10, 2026.',
    technicalHighlights: [
      'Next.js / React competition prep surfaces',
      'Firebase real-time progress',
      'Round-based official word lists',
      'Four study modes',
      'Analytics and leaderboards',
    ],
    outcome:
      '1000+ users in the UAE. All top-3 UAE spellers studied with Hive. Official platform for Oman Spelling Bee 2026.',
    technologies: [
      'Next.js',
      'React',
      'Firebase',
      'Tailwind CSS',
      'Google Cloud Functions',
    ],
    links: {
      website: 'https://learn.spellingbee.ae',
    },
    media: [
      {
        type: 'image',
        url: '/projects/PrepCenter.com.png',
        alt: 'PrepCenter official Spelling Bee studying platform',
      },
    ],
    stats: [
      { label: 'UAE users', value: '1000+' },
      { label: 'Study modes', value: '4' },
      { label: 'UAE top 3', value: 'All used Hive' },
    ],
  },
  {
    id: 'argusos',
    name: 'ArgusOS',
    tagline: 'AI personal secretary for email and calendar',
    description:
      'ArgusOS is an AI personal secretary that automatically triages emails, generates draft replies, prepares meeting context, and surfaces what needs attention.',
    category: 'featured',
    startDate: '2025',
    endDate: 'Present',
    role: 'Builder',
    problem:
      'Inboxes bury what matters. People spend hours sorting mail and prep for meetings without a durable triage and draft loop.',
    solution:
      'Built a private AI email and calendar agent dashboard: priority triage, tone-aware draft replies, and meeting prep packs from related threads.',
    technicalHighlights: [
      'Next.js App Router dashboard',
      'Gmail and Google Calendar APIs',
      'Firebase Auth and Firestore',
      'OpenAI triage and drafting pipeline',
      'Priority categories and needs-reply queues',
    ],
    outcome:
      'Live product at argus-os.vercel.app demonstrating end-to-end AI agent workflows on real productivity surfaces.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'OpenAI',
      'Gmail API',
      'Google Calendar',
      'Tailwind CSS',
    ],
    links: {
      website: 'https://argus-os.vercel.app/',
    },
    media: [
      {
        type: 'image',
        url: '/projects/argusos.png',
        alt: 'ArgusOS AI email and calendar agent dashboard',
      },
    ],
  },
  {
    id: 'gathr',
    name: 'Gathr',
    tagline: 'Campus life platform for students and organizations',
    description:
      'Gathr streamlines campus life with one unified platform for administrators, organizations, and students. Co-founded and launched an iOS app connecting clubs and students through a social media-like interface.',
    category: 'featured',
    startDate: 'Apr 2024',
    endDate: 'Nov 2024',
    role: 'Co-Founder, iOS Developer, Head of Marketing',
    problem:
      'UF students struggled to discover clubs and events; organizations lacked a modern engagement channel.',
    solution:
      'Launched an iOS campus engagement app with GatorLink-authenticated access, push notifications via FCM, and Google Analytics for engagement optimization.',
    technicalHighlights: [
      'Native iOS development',
      'Firebase Authentication with GatorLink',
      'FCM push notifications',
      'Google Analytics event tracking',
      'Campus org and student social feeds',
    ],
    outcome:
      '700+ UF students, 60+ organizations, and 20,000+ views on social media campaigns within the first 3 weeks.',
    technologies: ['Swift', 'iOS', 'Firebase', 'FCM', 'Google Analytics'],
    links: {
      website: 'https://getgathr.app/',
    },
    media: [
      {
        type: 'image',
        url: '/projects/gathr.png',
        alt: 'Gathr campus involvement iOS app',
      },
    ],
    stats: [
      { label: 'UF students', value: '700+' },
      { label: 'Organizations', value: '60+' },
      { label: 'Campaign views', value: '20k+' },
    ],
  },
  {
    id: 'hive-app',
    name: 'Hive iOS App',
    tagline: 'Pattern-based spelling on iPhone',
    description:
      'Native iOS app delivering 60+ pattern-based lessons and quizzes on roots, patterns, and language origins. Part of the Hive platform used by 1500+ students across 3 countries.',
    category: 'featured',
    startDate: 'Jun 2023',
    endDate: 'Present',
    role: 'Co-Founder & iOS Developer',
    problem:
      'Students need mobile-first practice that teaches how words work, not only desktop dashboards.',
    solution:
      'Built the Hive iOS app with pattern lessons, Merriam-Webster integration, and GPT-assisted explanations, synced through CloudKit and Firebase.',
    technicalHighlights: [
      'Native iOS with Swift',
      'CloudKit synchronization',
      'Merriam-Webster API',
      'GPT-4 assisted explanations',
      'Progress tracking',
    ],
    outcome:
      'App Store presence alongside the web platform; mobile practice for competition and classroom learners.',
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
        alt: 'Hive iOS App spelling prep dashboard',
      },
    ],
    stats: [
      { label: 'Lessons', value: '60+' },
      { label: 'Platform users', value: '1500+' },
    ],
  },
  {
    id: 'codingforcharity',
    name: 'CodingForCharity',
    tagline: 'Websites for businesses, donations for kids',
    description:
      'Founded during COVID when in-person fundraisers shut down. Teens built free websites for small businesses and non-profits in exchange for charity donations supporting underprivileged children.',
    category: 'lab',
    startDate: 'Mar 2020',
    endDate: 'Dec 2021',
    role: 'Founder, Executive Director, Full-stack Developer',
    problem:
      'COVID canceled school fundraisers. Small businesses needed online presence to survive contactless shopping, and underprivileged kids still needed support.',
    solution:
      'Started CodingForCharity: student developers built websites for businesses that could not afford them, then routed donations to charity. Cold-called through skepticism and scam concerns until the first local grocery signed on.',
    technicalHighlights: [
      'Full-stack web development for 40+ sites',
      'E-commerce, paywalls, and mobile ordering',
      'WordPress and custom builds',
      'Taught programming to members before they shipped sites',
    ],
    outcome:
      '70+ members across 8 countries, 40+ websites, 1900+ Instagram followers, and local recognition including Spectrum News 13 Everyday Hero and K92.3 radio.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    links: {},
    stats: [
      { label: 'Members', value: '70+' },
      { label: 'Websites', value: '40+' },
      { label: 'Countries', value: '8' },
    ],
  },
  {
    id: 'internify',
    name: 'Internify',
    tagline: 'Job and internship search engine',
    description:
      'Web application using the MERN stack to create a job/internship search engine with real-time job postings from LinkedIn, Indeed, and ZipRecruiter.',
    category: 'lab',
    startDate: 'Dec 2022',
    endDate: 'Mar 2023',
    role: 'Co-Founder, Full-stack Developer',
    problem:
      'Students needed a centralized platform to search for jobs and internships across multiple sources with application tracking.',
    solution:
      'Built a MERN stack application that aggregates job postings from LinkedIn, Indeed, and ZipRecruiter and provides filtering and application tracking.',
    technicalHighlights: [
      'MERN stack',
      'External job Search APIs',
      'MongoDB aggregation',
      'Application progress tracking',
    ],
    outcome: 'Launched job search platform with real-time aggregation.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    links: {},
  },
  {
    id: 'marketatomy',
    name: 'MarketAtomy Business Health Platform',
    tagline: '21-module business health assessment platform',
    description:
      'Led full-stack web development of a 21-module business health assessment platform for optimizing business growth strategies.',
    category: 'lab',
    startDate: 'Jan 2020',
    endDate: 'Jul 2023',
    role: 'Software Engineer',
    problem:
      'Businesses needed a comprehensive platform to assess health across multiple dimensions and receive actionable insights.',
    solution:
      'Developed a 21-module assessment platform with secure OTP auth, PHP PDO hardening, MySQL, and server-side PDF reports.',
    technicalHighlights: [
      '21-module assessment system',
      'OTP authentication',
      'XSS and SQLi prevention',
      'Server-side PDF generation',
    ],
    outcome: 'Deployed platform helping businesses optimize growth strategies.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    links: {
      website: 'https://www.marketatomy.com/bhc',
    },
    media: [
      {
        type: 'image',
        url: '/projects/marketatomy.png',
        alt: 'MarketAtomy Business Health Check dashboard',
      },
    ],
    stats: [{ label: 'Modules', value: '21' }],
  },
  {
    id: 'nextgenwellness',
    name: 'NextGenWellness',
    tagline: 'AI-powered personal trainer and fitness tracker',
    description:
      'AI-powered personal trainer and fitness tracking platform for workouts, progress, and wellness habits.',
    category: 'lab',
    startDate: '2023',
    role: 'Developer',
    problem: 'People need personalized fitness guidance without a full-time trainer.',
    solution: 'Built a wellness app with AI-assisted training guidance and progress dashboards.',
    technicalHighlights: [
      'AI-assisted training guidance',
      'Fitness tracking dashboards',
      'Progress visualization',
    ],
    outcome: 'Live wellness prototype.',
    technologies: ['React.js', 'Node.js', 'Health APIs'],
    links: {
      website: 'https://next-gen-wellness.vercel.app',
    },
    media: [
      {
        type: 'image',
        url: '/projects/nextGen.png',
        alt: 'NextGenWellness AI fitness and wellness platform',
      },
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
    technicalHighlights: ['Statistical modeling', 'Match simulation', 'Data visualization'],
    outcome: 'Functional IPL simulation tool.',
    technologies: ['Python', 'Data Analysis', 'Statistics'],
    links: {
      website: 'https://ipl-2025-beta.vercel.app',
    },
    media: [
      {
        type: 'image',
        url: '/projects/ipl.png',
        alt: 'IPL simulation standings and predictions',
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
    technicalHighlights: ['Travel API integration', 'Booking system', 'Student discounts'],
    outcome: 'Travel platform prototype.',
    technologies: ['Next.js', 'Travel APIs', 'Payment Processing'],
    links: {
      website: 'https://gator-trips.vercel.app',
    },
    media: [
      {
        type: 'image',
        url: '/projects/gatortrips.png',
        alt: 'GatorTrips travel planning for UF students',
      },
    ],
  },
];
