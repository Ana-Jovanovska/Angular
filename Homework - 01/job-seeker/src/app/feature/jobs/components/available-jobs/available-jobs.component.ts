import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ToggleJobsDirective } from '../../../../core/directives/toggle-jobs.directive';

@Component({
  selector: 'app-available-jobs',
  standalone: true,
  imports: [ButtonComponent, ToggleJobsDirective],
  templateUrl: './available-jobs.component.html',
  styleUrl: './available-jobs.component.scss',
})
export class AvailableJobsComponent {}
