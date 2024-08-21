import { Component, inject } from '@angular/core';
import { LoggerService } from '../../../../service/logger.service';

@Component({
  selector: 'app-applied-jobs-list',
  standalone: true,
  imports: [],
  templateUrl: './applied-jobs-list.component.html',
  styleUrl: './applied-jobs-list.component.scss',
})
export class AppliedJobsListComponent {
  private loggerService = inject(LoggerService);

  ngOnInit(): void {
    this.loggerService.logDetails('Movie Details');
  }
}
