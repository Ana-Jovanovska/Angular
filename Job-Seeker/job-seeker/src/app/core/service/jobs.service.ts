import { Injectable, OnInit, signal } from '@angular/core';
import { Jobs } from '../../feature/jobs/model/jobs.model';
import { jobsMock } from '../../feature/jobs/jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService implements OnInit {
  jobs = signal<Jobs[]>(jobsMock);
  selectedJobs = signal<Jobs[]>([]);

  ngOnInit(): void {
    console.log(this.jobs());
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
