import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ToogleDetailsDirective } from '../../../../core/components/directives/toogle-details.directive';
import { JobsService } from '../../../../core/service/jobs.service';
import { Jobs } from '../../model/jobs.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaiable-item',
  standalone: true,
  imports: [ButtonComponent, ToogleDetailsDirective, CommonModule],
  templateUrl: './avaiable-item.component.html',
  styleUrl: './avaiable-item.component.scss',
})
export class AvaiableItemComponent {
  private jobsService = inject(JobsService);
  private router = inject(Router);
  job = input<Jobs>();

  clickApplyButton(id: string) {
    this.jobsService.applyJob(id);
  }

  clickCompanyButton() {
    this.router.navigate(['company']);
  }
}
