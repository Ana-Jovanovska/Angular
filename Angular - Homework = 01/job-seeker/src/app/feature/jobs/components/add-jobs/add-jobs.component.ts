import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { JobsFormComponent } from '../jobs-form/jobs-form.component';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { JobsService } from '../../../../core/service/jobs.service';
import { JobsFormValue } from '../../../models/jobs.model';

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

  onAddJobs(value: JobsFormValue) {
    console.log('Add jobs', value);
  }
}
