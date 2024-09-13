import { Component, input, output, signal } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { Jobs, JobsForm } from '../../model/jobs.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './jobs-form.component.html',
  styleUrl: './jobs-form.component.scss',
})
export class JobsFormComponent {
  reviewJobsForm = this.generateJobsForm();
  editJobsData = input<Jobs>();
  jobsFormOutput = output<JobsForm>();

  maxDescriptionLenghJobsForm = 300;

  jobsSubmitted = signal(false);

  generateJobsForm() {
    return new FormGroup({
      company: new FormControl('', Validators.required),
      expires: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      startingSalary: new FormControl<number>(null, Validators.required),
      workType: new FormControl(null, Validators.required),
      location: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      qualifications: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxDescriptionLenghJobsForm),
      ]),
    });
  }

  populateJobsForm(jobs: Jobs) {
    this.reviewJobsForm.setValue({
      company: jobs.company,
      expires: jobs.expires,
      position: jobs.position,
      startingSalary: jobs.startingSalary,
      workType: jobs.workType,
      location: jobs.location,
      country: jobs.country,
      qualifications: jobs.qualifications,
      description: jobs.description,
    });
  }

  onJobsForm() {
    this.reviewJobsForm.markAllAsTouched();

    if (this.reviewJobsForm.invalid) return;

    console.log(this.reviewJobsForm.value);
  }
}
