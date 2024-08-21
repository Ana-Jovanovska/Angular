import { Job } from './models/jobs.model';

export const jobsMock: Job[] = [
  {
    company: 'Tech Innovators Inc.',
    expires: '2024-09-30',
    position: 'Front-End Developer',
    startingSalary: 72000,
    workType: 'remote',
    location: 'San Francisco, CA',
    country: 'USA',
    qualifications:
      'Experience with React, JavaScript, HTML, and CSS. Familiarity with TypeScript is a plus.',
    description:
      'Develop and maintain user interfaces for web applications. Collaborate with UX/UI designers and back-end developers to create seamless user experiences.',
    isApplied: false,
  },
  {
    company: 'Global Solutions Ltd.',
    expires: '2024-10-15',
    position: 'Back-End Developer',
    startingSalary: 85000,
    workType: 'onsite',
    location: 'London',
    country: 'UK',
    qualifications:
      'Strong experience with Node.js, Express, and databases like MongoDB or PostgreSQL. Knowledge of RESTful APIs and security best practices.',
    description:
      'Design and implement server-side logic, manage databases, and ensure application performance and security. Work closely with front-end developers to integrate APIs.',
    isApplied: true,
  },
  {
    company: 'Creative Minds Co.',
    expires: '2024-08-31',
    position: 'Full-Stack Developer',
    startingSalary: 78000,
    workType: 'hybrid',
    location: 'New York, NY',
    country: 'USA',
    qualifications:
      'Experience with both front-end and back-end technologies such as React, Node.js, and SQL databases. Strong problem-solving skills.',
    description:
      'Work on both client-side and server-side code. Develop full-stack solutions and collaborate with other developers to build comprehensive web applications.',
    isApplied: false,
  },
  {
    company: 'Future Technologies LLC',
    expires: '2024-11-01',
    position: 'Data Scientist',
    startingSalary: 95000,
    workType: 'remote',
    location: 'Remote',
    country: 'USA',
    qualifications:
      'Experience with Python, R, and machine learning algorithms. Advanced degree preferred.',
    description:
      'Analyze complex data sets to drive business decisions. Develop predictive models and collaborate with engineering teams.',
    isApplied: false,
  },
  {
    company: 'Creative Minds Co.',
    expires: '2024-08-31',
    position: 'UX Designer',
    startingSalary: 68000,
    workType: 'hybrid',
    location: 'New York, NY',
    country: 'USA',
    qualifications:
      'Strong portfolio showcasing UX design projects, experience with Figma or Sketch',
    description:
      'Design engaging user experiences and interfaces for web and mobile applications. Work closely with developers and product teams.',
    isApplied: false,
  },
];
