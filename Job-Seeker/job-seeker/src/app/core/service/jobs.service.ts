import { Injectable, OnInit, signal } from '@angular/core';
import { Jobs } from '../../feature/jobs/model/jobs.model';
import { jobsMock } from '../../feature/jobs/jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Jobs[]>(jobsMock);
  selectedJobs = signal<Jobs[]>([]);

  onGetByIdJobs(id: string) {
    const getJobs = this.jobs().find((job) => job.id === id);

    return getJobs;
  }

  resetJobs() {
    this.jobs.set(jobsMock);
  }

  onJobsEdit(jobsEdit: Jobs) {
    this.jobs.update((prev) =>
      prev.map((job) => {
        if (job.id === jobsEdit.id) {
          return { ...jobsEdit };
        } else {
          return job;
        }
      })
    );
  }

  onAddedJobs(job: Jobs) {
    this.jobs.update((prev) => [...prev, job]);
  }

  applyJob(id: string) {
    this.jobs.update((prev) =>
      prev.map((job) => {
        if (job.id === id) {
          job.isApplied = true;
          return job;
        } else {
          return job;
        }
      })
    );
    this.selectedJobs.set(this.jobs().filter((job) => job.isApplied));
  }

  cancelJob(id: string) {
    this.jobs.update((prev) =>
      prev.map((job) => {
        if (job.id === id) {
          job.isApplied = false;
          return job;
        } else {
          return job;
        }
      })
    );
    this.selectedJobs.set(this.jobs().filter((job) => job.isApplied));
  }
}
