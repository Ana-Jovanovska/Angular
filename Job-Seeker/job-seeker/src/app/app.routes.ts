import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { JobsComponent } from './feature/jobs/jobs.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { ContactUsComponent } from './feature/contact-us/contact-us.component';
import { AddJobsComponent } from './feature/jobs/components/add-jobs/add-jobs.component';
import { EditJobsComponent } from './feature/jobs/components/edit-jobs/edit-jobs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-jobs',
    component: AddJobsComponent,
  },
  {
    path: 'edit-jobs',
    component: EditJobsComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
