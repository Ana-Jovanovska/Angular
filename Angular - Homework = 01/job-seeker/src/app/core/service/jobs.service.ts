import { Injectable, signal } from '@angular/core';
import { Jobs } from '../../feature/models/jobs.model';
import { jobsMock } from '../../feature/jobs/jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  job = signal<Jobs[]>(jobsMock);
  selectedJobs = signal<Jobs[]>([]);

  applyJobs(id: number) {
    this.job.update((prev) =>
      prev.map((jobs) => {
        if (jobs.id === id) {
          jobs.isApplied = true;
          return jobs;
        } else {
          return jobs;
        }
      })
    );
    this.selectedJobs.set(this.job().filter((jobs) => jobs.isApplied));
  }

  cancelJobs(id: number) {
    this.job.update((prev) =>
      prev.map((jobs) => {
        if (jobs.id === id) {
          jobs.isApplied = false;
          return jobs;
        } else {
          return jobs;
        }
      })
    );
    this.selectedJobs.set(this.job().filter((jobs) => jobs.isApplied));
  }
}
