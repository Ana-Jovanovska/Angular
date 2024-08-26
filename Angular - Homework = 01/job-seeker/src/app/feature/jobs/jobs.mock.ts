import { Jobs } from './models/jobs.model';

export const jobsMock: Jobs[] = [
  {
    id: 1,
    company: 'TechCorp',
    expires: '2024-09-30',
    position: 'Frontend Developer',
    startingSalary: 60000,
    workType: 'remote',
    location: 'Skopje',
    country: 'Macedonia',
    qualifications: 'Angular, TypeScript, CSS',
    description: 'Develop and maintain web applications...',
    isApplied: false,
  },
];
