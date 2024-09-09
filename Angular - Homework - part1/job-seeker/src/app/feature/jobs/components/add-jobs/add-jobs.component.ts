import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { JobsService } from '../../../../core/service/jobs.service';
import { Jobs, JobsFormValue } from '../../../models/jobs.model';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-jobs',
  standalone: true,
  imports: [
    HeaderComponent,
    JobsFormComponent,
    FooterComponent,
    JobsFormComponent,
  ],
  templateUrl: './add-jobs.component.html',
  styleUrl: './add-jobs.component.scss',
})
export class AddJobsComponent {
  private jobsService = inject(JobsService);
  private router = inject(Router);

  onAddJobs(jobsAdd: JobsFormValue) {
    console.log(this.jobsService.jobs.length);
    const addJobs: Jobs = {
      id: uuid(),
      company: jobsAdd.company,
      expires: jobsAdd.expires,
      position: jobsAdd.position,
      startingSalary: jobsAdd.startingSalary,
      workType: jobsAdd.workType,
      location: jobsAdd.location,
      country: jobsAdd.country,
      qualifications: jobsAdd.qualifications,
      description: jobsAdd.description,
      isApplied: false,
    };

    this.jobsService.onAddJobs(addJobs);

    console.log(addJobs);

    this.router.navigate(['jobs']);
  }
}
