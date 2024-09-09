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

export interface JobsFormValue {
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

export interface ContactUs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  message: string;
}
