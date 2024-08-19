import { Jobs } from './models/jobs.models';

export const jobsMock: Jobs[] = [
  {
    company: 'Tech Innovators Ltd.',
    expires: '2024-09-15',
    position: 'Frontend Developer',
    startingSalary: 45000,
    workType: 'remote',
    location: 'Skopje',
    country: 'North Macedonia',
    qualifications:
      '2+ years of experience with React or Angular, strong knowledge of HTML, CSS, and JavaScript.',
    description:
      'Develop and maintain web applications, collaborate with designers and backend developers, and ensure high performance and responsiveness of applications.',
    isApplied: true,
  },
  {
    company: 'Data Solutions Inc.',
    expires: '2024-10-01',
    position: 'Data Science',
    startingSalary: 55000,
    workType: 'onsite',
    location: 'Tetovo',
    country: 'North Macedonia',
    qualifications:
      '3+ years of experience in data analysis, proficiency in Python or R, strong analytical skills, experience with data visualization tools.',
    description:
      'Analyze complex data sets to inform business decisions, build predictive models, and communicate findings effectively to stakeholders.',
    isApplied: false,
  },
  {
    company: 'Creative Minds Studio',
    expires: '2024-08-30',
    position: 'UI/UX Designer',
    startingSalary: 40000,
    workType: 'hybrid',
    location: 'Bitola',
    country: 'North Macedonia',
    qualifications:
      '2+ years of experience in UI/UX design, strong knowledge of Figma or Adobe XD, creativity, and attention to detail.',
    description:
      'Design user interfaces and create user experiences for web and mobile applications, work closely with development teams to ensure design feasibility.',
    isApplied: true,
  },
  {
    company: 'Global Tech Partners',
    expires: '2024-11-20',
    position: 'Backend Developer',
    startingSalary: 50000,
    workType: 'remote',
    location: 'Ohrid',
    country: 'North Macedonia',
    qualifications:
      '3+ years of experience with Node.js, strong knowledge of SQL and NoSQL databases, problem-solving skills.',
    description:
      'Develop and maintain server-side applications and APIs, integrate with frontend components, and ensure system scalability and reliability.',
    isApplied: false,
  },
  {
    company: 'Market Experts Ltd.',
    expires: '2024-12-05',
    position: 'Marketing Specialist',
    startingSalary: 42000,
    workType: 'onsite',
    location: 'Skopje',
    country: 'North Macedonia',
    qualifications:
      '2+ years of experience in marketing, knowledge of digital marketing strategies, excellent communication skills, creativity.',
    description:
      'Develop and execute marketing campaigns, analyze market trends, and adjust strategies to improve brand visibility and engagement.',
    isApplied: true,
  },
];
