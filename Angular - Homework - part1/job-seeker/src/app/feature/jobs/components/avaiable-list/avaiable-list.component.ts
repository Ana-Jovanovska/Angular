import { Component, computed, inject, model } from '@angular/core';
import { JobsService } from '../../../../core/service/jobs.service';
import { Jobs } from '../../../models/jobs.model';
import { AvaiableItemComponent } from '../avaiable-item/avaiable-item.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { FilterPipePipe } from '../../../../core/pipe/filter-pipe.pipe';

@Component({
  selector: 'app-avaiable-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FilterPipePipe,
    AvaiableItemComponent,
  ],
  templateUrl: './avaiable-list.component.html',
  styleUrl: './avaiable-list.component.scss',
})
export class AvaiableListComponent {
  private jobsService = inject(JobsService);
  searchValue = model<string>('');

  jobs = computed<Jobs[]>(() => {
    return this.jobsService.jobs().filter((job) => !job.isApplied);
  });
}
