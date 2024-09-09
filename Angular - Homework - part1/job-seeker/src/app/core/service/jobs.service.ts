import { inject, Injectable, signal } from '@angular/core';
import { Jobs } from '../../feature/models/jobs.model';
import { jobsMock } from '../../feature/jobs/jobs.mock';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Jobs[]>(jobsMock);
  selectedJobs = signal<Jobs[]>([]);
  private router = inject(Router);

  applyJob(id: number) {
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

  cancelJob(id: number) {
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

  onEditJobs(editJobsForm: Jobs) {
    this.jobs.update((prev) =>
      prev.map((job) => {
        if (job.id === editJobsForm.id) {
          return { ...editJobsForm };
        } else {
          return job;
        }
      })
    );
  }
}
