import { Routes } from '@angular/router';
import { JobsListComponent } from '../pages/jobs-list/jobs-list';
import { JobDetailsComponent } from '../pages/job-details/job-details';

export const JOBS_ROUTES: Routes = [
  {
    path: '',
    component: JobsListComponent,
  },
  {
    path: ':id',
    component: JobDetailsComponent,
  },
];
