import { Component } from '@angular/core';
import { JobsDetailsComponent } from '../jobs-details/jobs-details.component';

@Component({
  selector: 'app-jobs-item',
  standalone: true,
  imports: [JobsDetailsComponent],
  templateUrl: './jobs-item.component.html',
  styleUrl: './jobs-item.component.scss',
})
export class JobsItemComponent {}
