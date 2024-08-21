import { Injectable, signal } from '@angular/core';
import { Job } from '../feature/jobs/models/jobs.model';
import { jobsMock } from '../feature/jobs/jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>(jobsMock);

  selectedJob = signal<Job>(null);

  jobsSelect(job: Job);
}
