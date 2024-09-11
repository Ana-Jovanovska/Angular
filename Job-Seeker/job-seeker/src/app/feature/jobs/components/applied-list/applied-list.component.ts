import { Component, inject, computed } from '@angular/core';
import { JobsService } from '../../../../core/service/jobs.service';
import { CommonModule } from '@angular/common';
import { Jobs } from '../../model/jobs.model';
import { AppliedItemComponent } from '../applied-item/applied-item.component';

@Component({
  selector: 'app-applied-list',
  standalone: true,
  imports: [CommonModule, AppliedItemComponent],
  templateUrl: './applied-list.component.html',
  styleUrl: './applied-list.component.scss',
})
export class AppliedListComponent {
  private jobsService = inject(JobsService);

  selectJobs = computed<Jobs[]>(() => {
    return this.jobsService.selectedJobs();
  });
}
