export interface Jobs {
  id: string;
  company: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: 'remote' | 'onsite' | 'hybrid';
  location: string;
  country: string;
  qualifications: string;
  description: string;
  isApplied: boolean;
}

export interface JobsForm {
  company: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: 'remote' | 'onsite' | 'hybrid';
  location: string;
  country: string;
  qualifications: string;
  description: string;
}

export enum JobsFilter {
  REMOTE = 'remote',
  ONSITE = 'onsite',
  HYBRID = 'hybrid',
}
