import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header';
import { JobsListComponent } from './features/jobs/pages/jobs-list/jobs-list';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderComponent, JobsListComponent],
  templateUrl: './app.html'
})
export class App {}
