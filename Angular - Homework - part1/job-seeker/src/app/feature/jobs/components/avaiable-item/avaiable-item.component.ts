import { Component, inject, input } from '@angular/core';
import { Jobs } from '../../../models/jobs.model';
import { JobsService } from '../../../../core/service/jobs.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-avaiable-item',
  standalone: true,
  imports: [CommonModule, ToogleDetailsDirective, ButtonComponent],
  templateUrl: './avaiable-item.component.html',
  styleUrl: './avaiable-item.component.scss',
})
export class AvaiableItemComponent {
  private jobService = inject(JobsService);
  private router = inject(Router);
  job = input<Jobs>();

  clickApplyButton(id: number) {
    this.jobService.applyJob(id);
  }
  clickCompanyButton() {
    this.router.navigate(['company']);
  }
}
