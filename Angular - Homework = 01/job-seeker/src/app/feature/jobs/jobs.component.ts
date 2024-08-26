import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { JobsItemComponent } from './components/jobs-item/jobs-item.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [HeaderComponent, JobsItemComponent, JobsListComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {}
