import { Component, computed, inject, model } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { AvaiableListComponent } from './components/avaiable-list/avaiable-list.component';
import { AppliedListComponent } from './components/applied-list/applied-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { JobsService } from '../../core/service/jobs.service';
import { JobsFilter } from './model/jobs.model';
import { Jobs } from './model/jobs.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AvaiableListComponent,
    AppliedListComponent,
    CommonModule,
    FormsModule,
    ButtonComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  searchJobs = model<string>('');
  private jobsService = inject(JobsService);
  readonly sortedJobs = JobsFilter;

  jobs = computed<Jobs[]>(() => {
    return this.jobsService.jobs().filter((job) => !job.isApplied);
  });
  onResetJobs() {
    console.log('click');
    this.jobsService.resetJobs;
  }
}
