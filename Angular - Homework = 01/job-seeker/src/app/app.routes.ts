import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { JobsComponent } from './feature/jobs/jobs.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { CompanyComponent } from './feature/company/company.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { ContactUsComponent } from './feature/contact-us/contact-us.component';
import { AddJobsComponent } from './feature/jobs/components/add-jobs/add-jobs.component';
import { EditJobsComponent } from './feature/jobs/components/edit-jobs/edit-jobs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
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
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
