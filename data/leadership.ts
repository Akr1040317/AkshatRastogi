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
    id: 'gator-tank',
    organization: 'UF Gator Tank Pitch Competition',
    role: 'Finalist',
    location: 'Gainesville, FL',
    startDate: '2024',
    endDate: '2024',
    description:
      'Finalist at the University of Florida Gator Tank pitch competition, presenting and defending a venture in front of judges and peers.',
    achievements: [
      'Selected as a Gator Tank Finalist',
      'Pitched product vision, traction, and go-to-market under live Q&A',
    ],
  },
  {
    id: 'codingforcharity',
    organization: 'CodingForCharity',
    role: 'Founder & Executive Director',
    location: 'Lake Mary, FL',
    startDate: 'Mar 2020',
    endDate: 'Dec 2021',
    description:
      'Founded CodingForCharity so teens could build free websites for small businesses and non-profits, then channel donations to underprivileged children after COVID canceled school fundraisers.',
    achievements: [
      'Grew to 70+ student members across 8 countries and shipped 40+ websites',
      'Landed the first client after rejected cold calls and scam concerns, a local grocery',
      'Featured as Spectrum News 13 Everyday Hero and on K92.3 Orlando radio',
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
