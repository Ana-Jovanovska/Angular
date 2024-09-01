import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';

@Component({
  selector: 'app-add-jobs',
  standalone: true,
  imports: [HeaderComponent, JobsFormComponent],
  templateUrl: './add-jobs.component.html',
  styleUrl: './add-jobs.component.scss',
})
export class AddJobsComponent {}
