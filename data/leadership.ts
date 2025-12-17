export interface Leadership {
  id: string;
  organization: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
}

export const leadership: Leadership[] = [
  {
    id: 'codingforcharity',
    organization: 'CodingForCharity',
    role: 'Co-Founder & Executive Director',
    location: 'Lake Mary, FL',
    startDate: 'Mar 2020',
    endDate: 'Dec 2021',
    description:
      'Co-founded and led CodingForCharity, a global organization that fundraises for underprivileged children by building websites for businesses and non-profits in exchange for charity donations. Built a team of 70+ members across 8 countries and coordinated the development of 40+ websites.',
    achievements: [
      'Co-founded organization that grew to 70+ members across 8 countries',
      'Led development and management of 40+ websites with e-commerce, payment processing, and mobile ordering capabilities',
      'Received coverage from prominent local radio and TV stations recognizing the organization\'s community impact',
      'Established partnerships with businesses and non-profits to fundraise for underprivileged children',
      'Built and managed full-stack web solutions including WordPress customization, payment APIs, and project management systems',
    ],
  },
  {
    id: 'cricket',
    organization: 'Orange County Cricket - Developmental Team',
    role: 'Elected Board Director & Team Captain',
    location: 'Orlando, FL',
    startDate: 'Aug 2021',
    endDate: 'Present',
    description:
      'Mentored and led emerging cricketers to help develop their interpersonal skills and meet club strategic goals.',
    achievements: [
      'Named MVP in the 2021, 2022, and 2024 seasons',
      'Competed in US Men\'s U23 and US Men\'s National Trials in 2023, 2024, and 2025',
      'Elected Board Director and Team Captain',
    ],
  },
];

