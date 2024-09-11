import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { JobsComponent } from './feature/jobs/jobs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
];
