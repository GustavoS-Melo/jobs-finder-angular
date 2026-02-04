import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { JobsPage } from './pages/jobs/jobs';
import { JobDetailsPage } from './pages/job-details/job-details';
import { FavoritesPage } from './pages/favorites/favorites';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'jobs', component: JobsPage},
  {path: 'jobs/:id', component: JobDetailsPage},
  {path: 'favorites', component: FavoritesPage},
];
