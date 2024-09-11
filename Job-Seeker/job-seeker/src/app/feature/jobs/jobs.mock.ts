import { Jobs } from './model/jobs.model';

export const jobsMock: Jobs[] = [
  {
    id: '1',
    company: 'Tech Innovators Inc.',
    expires: '2024-09-15',
    position: 'Frontend Developer',
    startingSalary: 70000,
    workType: 'remote',
    location: 'New York, NY',
    country: 'USA',
    qualifications: 'Experience with React and TypeScript',
    description:
      'We are looking for a skilled Frontend Developer to join our team. You will be responsible for creating intuitive and dynamic user interfaces for our cutting-edge web applications. Your role will involve working closely with designers and backend developers to implement high-quality features that enhance the user experience. Strong knowledge of React and TypeScript is essential, along with a passion for staying updated with the latest frontend trends.',
    isApplied: false,
  },

  {
    id: '2',
    company: 'Global Solutions Ltd.',
    expires: '2024-08-30',
    position: 'Backend Developer',
    startingSalary: 80000,
    workType: 'onsite',
    location: 'London',
    country: 'UK',
    qualifications: 'Proficient in Node.js and Express',
    description:
      'Join our backend team to work on scalable web applications that serve millions of users worldwide. As a Backend Developer, you will be responsible for designing, developing, and maintaining our server-side logic and databases. Your expertise in Node.js and Express will be crucial in optimizing performance and ensuring the robustness of our systems. Collaboration with frontend teams and a strong understanding of security practices are also key to this role.',
    isApplied: false,
  },
];
