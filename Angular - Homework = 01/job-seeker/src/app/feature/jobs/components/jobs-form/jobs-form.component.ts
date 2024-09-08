import { Component, effect, input, output, signal } from '@angular/core';
import { Jobs } from '../../../models/jobs.model';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-jobs-form',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './jobs-form.component.html',
  styleUrl: './jobs-form.component.scss',
})
export class JobsFormComponent {
  editReviewData = input<Jobs>();
  jobsForm = this.generateForm();
  maxDescriptionLennght = 200;
  jobsSubmitted = signal(false);
  submitOutput = output<ReactiveFormsModule>();

  constructor() {
    effect(() => {
      if (this.editReviewData()) this.populateForm(this.editReviewData());
    });
  }

  generateForm() {
    return new FormGroup({
      company: new FormControl('', Validators.required),
      expires: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      startingSalary: new FormControl<number>(null, [
        Validators.required,
        Validators.min(1000),
      ]),
      workType: new FormControl('Onsite'),
      location: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      qualifications: new FormControl('', Validators.required),
      description: new FormControl(
        '',
        Validators.maxLength(this.maxDescriptionLennght)
      ),
    });
  }

  populateForm(jobs: Jobs) {
    this.jobsForm.setValue({
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

  onFormSubmit() {
    this.jobsSubmitted.set(true);
    this.jobsForm.markAllAsTouched();

    if (this.jobsForm.invalid) return;

    console.log(this.jobsForm.value);

    this.submitOutput.emit(this.jobsForm.value as ReactiveFormsModule);
  }
}
