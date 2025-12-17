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

