import { Component, inject, OnInit, signal } from '@angular/core';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../../../../core/service/jobs.service';
import { Jobs, JobsForm } from '../../model/jobs.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-jobs',
  standalone: true,
  imports: [JobsFormComponent, CommonModule],
  templateUrl: './edit-jobs.component.html',
  styleUrl: './edit-jobs.component.scss',
})
export class EditJobsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private jobsService = inject(JobsService);

  selectedJobs = this.jobsService.selectedJobs;
  jobsSelect = signal<Jobs>(null);

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];

    this.jobsService.onGetByIdJobs(String(id));
  }

  onEditJobs(editJobs: JobsForm) {
    const addEditJobs: Jobs = {
      id: this.jobsSelect().id,
      company: editJobs.company,
      expires: editJobs.expires,
      position: editJobs.position,
      startingSalary: editJobs.startingSalary,
      workType: editJobs.workType,
      location: editJobs.location,
      country: editJobs.country,
      qualifications: editJobs.qualifications,
      description: editJobs.description,
      isApplied: false,
    };

    this.jobsService.onAddedJobs(addEditJobs);

    this.router.navigate(['jobs']);
  }
}
