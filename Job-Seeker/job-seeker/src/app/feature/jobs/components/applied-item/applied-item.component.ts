import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';
import { JobsService } from '../../../../core/service/jobs.service';
import { Jobs } from '../../model/jobs.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applied-item',
  standalone: true,
  imports: [ButtonComponent, ToogleDetailsDirective, CommonModule],
  templateUrl: './applied-item.component.html',
  styleUrl: './applied-item.component.scss',
})
export class AppliedItemComponent {
  private router = inject(Router);
  private jobService = inject(JobsService);
  selectedJobs = input<Jobs>(null);

  clickCancelButton(id: string) {
    this.jobService.cancelJob(id);
  }

  clickCompanyButton() {
    this.router.navigate(['company']);
  }
}
