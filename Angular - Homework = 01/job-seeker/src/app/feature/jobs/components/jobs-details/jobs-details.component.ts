import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { JobsService } from '../../../../core/service/jobs.service';
import { Jobs } from '../../models/jobs.model';
import { CommonModule } from '@angular/common';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';

@Component({
  selector: 'app-jobs-details',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ToogleDetailsDirective],
  templateUrl: './jobs-details.component.html',
  styleUrl: './jobs-details.component.scss',
})
export class JobsDetailsComponent {
  private jobService = inject(JobsService);
  jobs = input<Jobs>(null);

  appliedJobs(id: number) {
    this.jobService.appliedJobs(id);
  }
}
