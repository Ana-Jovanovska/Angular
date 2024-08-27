import { Jobs } from '../models/jobs.model';

export const jobsMock: Jobs[] = [
  {
    id: 1,
    company: 'Tech Innovators Inc.',
    expires: '2024-09-15',
    position: 'Frontend Developer',
    startingSalary: 70000,
    workType: 'remote',
    location: 'New York, NY',
    country: 'USA',
    qualifications: 'Experience with React and TypeScript',
    description:
      'We are looking for a skilled Frontend Developer to join our team...',
    isApplied: false,
  },
  {
    id: 2,
    company: 'Global Solutions Ltd.',
    expires: '2024-08-30',
    position: 'Backend Developer',
    startingSalary: 80000,
    workType: 'onsite',
    location: 'London',
    country: 'UK',
    qualifications: 'Proficient in Node.js and Express',
    description:
      'Join our backend team to work on scalable web applications...',
    isApplied: false,
  },
  {
    id: 3,
    company: 'NextGen Technologies',
    expires: '2024-10-05',
    position: 'Full Stack Developer',
    startingSalary: 90000,
    workType: 'hybrid',
    location: 'Berlin',
    country: 'Germany',
    qualifications: 'Experience with both frontend and backend technologies',
    description:
      'We are seeking a Full Stack Developer with experience in both...',
    isApplied: false,
  },
  {
    id: 4,
    company: 'Innovative Solutions Group',
    expires: '2024-09-10',
    position: 'Data Scientist',
    startingSalary: 95000,
    workType: 'remote',
    location: 'San Francisco, CA',
    country: 'USA',
    qualifications: 'Experience in data analysis and machine learning',
    description:
      'We are looking for a Data Scientist to help us analyze data and...',
    isApplied: false,
  },
  {
    id: 5,
    company: 'Future Tech Enterprises',
    expires: '2024-09-20',
    position: 'UI/UX Designer',
    startingSalary: 65000,
    workType: 'hybrid',
    location: 'Amsterdam',
    country: 'Netherlands',
    qualifications: 'Strong portfolio of UI/UX design projects',
    description:
      'We are seeking a creative UI/UX Designer to improve the user experience...',
    isApplied: false,
  },
];
