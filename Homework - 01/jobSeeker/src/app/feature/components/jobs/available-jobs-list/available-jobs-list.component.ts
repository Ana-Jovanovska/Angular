import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ApplyButtonDirective } from '../../../../core/components/directives/apply-button.directive';

@Component({
  selector: 'app-available-jobs-list',
  standalone: true,
  imports: [ButtonComponent, ApplyButtonDirective],
  templateUrl: './available-jobs-list.component.html',
  styleUrl: './available-jobs-list.component.scss',
})
export class AvailableJobsListComponent {}
