import { Component, inject, input } from '@angular/core';
import { Jobs } from '../../../models/jobs.model';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';
import { JobsService } from '../../../../core/service/jobs.service';

@Component({
  selector: 'app-jobs-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ToogleDetailsDirective],
  templateUrl: './jobs-item.component.html',
  styleUrl: './jobs-item.component.scss',
})
export class JobsItemComponent {
  private jobService = inject(JobsService);
  job = input<Jobs>();

  ngOnInit(): void {
    console.log(`Job service create`);
  }

  clickApplyButton() {
    console.log(`Element apply click`);
  }
}
