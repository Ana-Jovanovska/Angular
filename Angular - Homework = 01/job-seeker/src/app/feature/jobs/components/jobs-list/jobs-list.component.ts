import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { JobsService } from '../../../../core/service/jobs.service';
import { Router } from '@angular/router';
import { JobsItemComponent } from '../jobs-item/jobs-item.component';
import { ToogleDetailsDirective } from '../../../../core/directives/toogle-details.directive';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [ButtonComponent, JobsItemComponent, ToogleDetailsDirective],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent {
  private jobService = inject(JobsService);
  private router = inject(Router);

  ngOnInit(): void {
    console.log(`Job service create`);
  }

  clickCancelButton() {
    console.log(`Element apply click`);
  }

  clickCompanyButton() {
    this.router.navigate(['company']);
  }
}
