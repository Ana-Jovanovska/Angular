import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { JobsComponent } from './feature/jobs/jobs.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { CompanyComponent } from './feature/company/company.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
    path: '**',
    component: NotFoundComponent,
  },
];
