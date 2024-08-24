import { computed, Injectable, signal } from '@angular/core';
import { jobsMock } from '../../feature/jobs/jobs.mock';
import { Jobs } from '../../feature/jobs/models/jobs.model';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Jobs[]>(jobsMock);
  selectedJobs = signal<Jobs[]>(null);

  getJobById(id: number) {
    this.jobs().find((job) => job.id === id);
  }

  appliedJob = computed<number>(() => {
    return this.selectedJobs().length;
  });

  appliedJobs(id: number) {
    this.jobs.update((prev) =>
      prev.map((jobs) => {
        if (jobs.id === id) {
          jobs.isApplied = true;
          return jobs;
        } else {
          return jobs;
        }
      })
    );
    this.selectedJobs.set(this.jobs().filter((jobs) => jobs.isApplied));
  }

  canceleJobs(id: number) {
    this.jobs.update((prev) =>
      prev.map((jobs) => {
        if (jobs.id === id) {
          jobs.isApplied = false;
          return jobs;
        } else {
          return jobs;
        }
      })
    );
    this.selectedJobs.set(this.jobs().filter((jobs) => jobs.isApplied));
  }
}
