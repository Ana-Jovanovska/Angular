import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';
import { FooterComponent } from '../../../../core/components/footer/footer.component';

@Component({
  selector: 'app-add-jobs',
  standalone: true,
  imports: [HeaderComponent, JobsFormComponent, FooterComponent],
  templateUrl: './add-jobs.component.html',
  styleUrl: './add-jobs.component.scss',
})
export class AddJobsComponent {}
