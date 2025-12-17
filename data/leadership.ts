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
      'Co-founded and led CodingForCharity, a global organization that fundraises for underprivileged children by building websites for businesses and non-profits in exchange for charity donations.',
    achievements: [
      'Co-founded organization that grew to 70+ members across 8 countries',
      'Led development of 40+ websites with e-commerce and payment processing',
      'Received coverage from prominent local radio and TV stations',
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

