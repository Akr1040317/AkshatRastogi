export interface Education {
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  details?: string[];
  activities?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
}

export const education: Education = {
  school: 'University of Florida, Herbert Wertheim College of Engineering',
  degree: 'B.S. in Computer Science, Minor in Business Administration, AI Certificate',
  location: 'Gainesville, FL',
  startDate: 'Aug 2021',
  endDate: 'May 2025',
  details: ['Grade: Senior'],
  activities: [
    'Society of Asian Scientists and Engineers',
    'UF Association for Computing Machinery',
    'Indian Student Association',
    'Gator Cricket Club',
    'Gator Awaaz',
  ],
};

export const highSchool: Education = {
  school: 'Seminole High School',
  degree: 'International Baccalaureate Diploma Programme',
  location: 'Seminole, FL',
  startDate: '2018',
  endDate: '2021',
  details: [
    'Summa Cum Laude',
    'AP Scholar with Distinction',
    'Grade: 4.61 GPA',
    'SAT: 1520 / ACT: 35',
  ],
  activities: [
    'Child Rights and You America Club (President)',
    'Technology Student Association (Fundraising Chair)',
    'CodingForCharity (Founder & Executive Director)',
    'Science National Honor Society (Physics & CS Chairman)',
    'Illuminati Academic Team',
    'Future Business Leaders of America',
    'Varsity Tennis Team',
  ],
};

export const certifications: Certification[] = [
  {
    name: '6.00.1x Introduction to Computer Science and Programming Using Python',
    issuer: 'MITx Courses',
    issueDate: 'Aug 2020',
    credentialId: '419450f84e3b4b439f88c0238b222ad1',
  },
  {
    name: 'Certified Internet Webmaster Business Associate',
    issuer: 'Certification Partners',
    issueDate: '2020',
  },
];


