import { Component, inject } from '@angular/core';
import { LoggerService } from '../../../../service/logger.service';
import { JobsService } from '../../../../service/jobs.service';

@Component({
  selector: 'app-applied-jobs-list',
  standalone: true,
  imports: [],
  templateUrl: './applied-jobs-list.component.html',
  styleUrl: './applied-jobs-list.component.scss',
})
export class AppliedJobsListComponent {
  private loggerService = inject(LoggerService);
  private jobsService = inject(JobsService);

  selectedJob = this.jobsService.selectedJob;

  ngOnInit(): void {
    this.loggerService.logDetails('Job Details');
  }
}
