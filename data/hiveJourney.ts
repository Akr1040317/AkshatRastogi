export interface HiveJourneyEvent {
  id: string;
  date: string;
  title: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export const hiveJourney: HiveJourneyEvent[] = [
  {
    id: 'uae-expansion',
    date: 'Late 2025',
    title: 'Became official UAE competition infrastructure',
    location: 'United Arab Emirates',
    summary:
      'National organizers needed more than another word-list app. We shipped PrepCenter as the official studying and competition platform for the Spelling Bee Championship UAE: round word lists, study modes, analytics, and leaderboards, then grew it into a real market.',
    highlights: [
      'Grew to 1000+ users in the UAE',
      'All top-3 UAE spellers prepared with Hive',
      'Official studying platform live at learn.spellingbee.ae',
    ],
  },
  {
    id: 'oman-official',
    date: 'Apr 2026',
    title: 'Won Oman as official national bee platform',
    location: 'Oman',
    summary:
      'After proving PrepCenter in the UAE, we expanded into Oman. Hive became the official learning platform for the Spelling Bee Championship Oman 2026, in collaboration with Scripps and the Government of Oman, and ran our first live webinar with Oman students and parents.',
    highlights: [
      'Official studying and quizzing platform launched Jan 10, 2026',
      'Partnership with The Spelling Bee Championship',
      'Second international expansion after the UAE',
    ],
  },
  {
    id: 'scripps-2026',
    date: 'May 26 to May 28, 2026',
    title: 'Hive at the Scripps National Spelling Bee Finals',
    location: 'Washington, DC',
    summary:
      'Hive students reached Scripps semis. Permission to attend arrived May 24. Two days later the Bee started. We bought flights on short notice, stayed with friends in DC, and turned Ross polos into branded merch overnight so we could show up on stage with our students. The results proved the method under the highest pressure.',
    highlights: [
      '19 Hive students competed at Scripps',
      '14 placed in the top 100; 7 reached quarterfinals; 3 reached the semis',
      '14 of the top 100 and 3 of the top 30 used Hive',
      'All but 4 were competing at nationals for the first time',
    ],
  },
  {
    id: 'bangalore-workshop',
    date: 'July 11, 2026',
    title: 'Launched Hive\'s first in-person workshop',
    location: 'Bangalore, India',
    summary:
      'We had no playbook and almost cancelled. Instead we took an empty apartment hall, pulled in family as the ops team, rented a local projector, and coded a phone clicker overnight when hardware would not arrive in time. The workshop brought pattern-based reading and writing to kids ages 7 to 13, Hive\'s first live classroom abroad.',
    highlights: [
      'First Hive in-person workshop, ages 7 to 13',
      'Brought pattern-based literacy into a live classroom format',
      'Proved Hive could expand beyond the product into hands-on teaching',
    ],
  },
];
