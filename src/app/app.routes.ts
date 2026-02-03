import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full',
  },
  {
    path: 'jobs',
    loadChildren: () => import('./features/jobs/pages/jobs.routes').then(m => m.JOBS_ROUTES)
  },
];
