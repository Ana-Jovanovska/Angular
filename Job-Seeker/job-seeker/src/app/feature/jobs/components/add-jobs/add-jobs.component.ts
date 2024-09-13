import { Component, inject, signal } from '@angular/core';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';
import { JobsService } from '../../../../core/service/jobs.service';
import { Jobs, JobsForm } from '../../model/jobs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jobs',
  standalone: true,
  imports: [JobsFormComponent],
  templateUrl: './add-jobs.component.html',
  styleUrl: './add-jobs.component.scss',
})
export class AddJobsComponent {
  private jobsService = inject(JobsService);
  private router = inject(Router);

  jobsSelect = signal<Jobs>(null);

  onAddMovie(addJobs: JobsForm) {
    const addNewJobs: Jobs = {
      id: this.jobsSelect().id,
      company: addJobs.company,
      expires: addJobs.expires,
      position: addJobs.position,
      startingSalary: addJobs.startingSalary,
      workType: addJobs.workType,
      location: addJobs.location,
      country: addJobs.country,
      qualifications: addJobs.qualifications,
      description: addJobs.description,
      isApplied: false,
    };

    this.jobsService.onAddedJobs(addNewJobs);

    this.router.navigate(['jobs']);
  }
}
