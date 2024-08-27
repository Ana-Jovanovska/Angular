import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from '../../../models/jobs.model';
import { JobsService } from '../../../../core/service/jobs.service';
import { CommonModule } from '@angular/common';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-applied-item',
  standalone: true,
  imports: [CommonModule, ToogleDetailsDirective, ButtonComponent],
  templateUrl: './applied-item.component.html',
  styleUrl: './applied-item.component.scss',
})
export class AppliedItemComponent {
  private jobService = inject(JobsService);
  private router = inject(Router);
  selectedJobs = input<Jobs>(null);

  clickCancelButton(id: number) {
    this.jobService.cancelJob(id);
  }

  clickCompanyButton() {
    this.router.navigate(['company']);
  }
}
