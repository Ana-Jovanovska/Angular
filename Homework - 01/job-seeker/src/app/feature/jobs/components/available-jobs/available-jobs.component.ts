import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-available-jobs',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './available-jobs.component.html',
  styleUrl: './available-jobs.component.scss',
})
export class AvailableJobsComponent {}
