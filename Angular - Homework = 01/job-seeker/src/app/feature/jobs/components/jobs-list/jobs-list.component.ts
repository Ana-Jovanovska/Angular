import { Component, computed, inject } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { JobsService } from '../../../../core/service/jobs.service';

import { JobsItemComponent } from '../jobs-item/jobs-item.component';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [ButtonComponent, JobsItemComponent],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent {
  private jobService = inject(JobsService);

  ngOnInit(): void {
    console.log(`Job service create`);
  }
}
