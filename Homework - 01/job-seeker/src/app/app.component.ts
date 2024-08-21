import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { AvailableJobsComponent } from './feature/jobs/components/available-jobs/available-jobs.component';
import { AppliedJobsListComponent } from './feature/jobs/components/applied-jobs-list/applied-jobs-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AvailableJobsComponent,
    AppliedJobsListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'job-seeker';
}
