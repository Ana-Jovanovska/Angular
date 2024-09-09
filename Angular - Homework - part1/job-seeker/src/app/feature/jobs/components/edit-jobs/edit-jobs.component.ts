import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { JobsService } from '../../../../core/service/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';
import { Jobs, JobsFormValue } from '../../../models/jobs.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-jobs',
  standalone: true,
  imports: [HeaderComponent, JobsFormComponent, CommonModule],
  templateUrl: './edit-jobs.component.html',
  styleUrl: './edit-jobs.component.scss',
})
export class EditJobsComponent implements OnInit {
  private jobsService = inject(JobsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  selectedJobs = signal<Jobs>(null);

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
  }

  editJobsForm(jobsForm: JobsFormValue) {
    const jobsFormEdit: Jobs = {
      id: this.selectedJobs().id,
      company: jobsForm.company,
      expires: jobsForm.expires,
      position: jobsForm.position,
      startingSalary: jobsForm.startingSalary,
      workType: jobsForm.workType,
      location: jobsForm.location,
      country: jobsForm.country,
      qualifications: jobsForm.qualifications,
      description: jobsForm.description,
      isApplied: false,
    };

    this.jobsService.onEditJobs(jobsFormEdit);

    this.router.navigate(['jobs']);
  }
}
