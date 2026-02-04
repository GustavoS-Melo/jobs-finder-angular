import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../../features/jobs/job-card/job-card';
import { JOBS_MOCK } from '../../features/jobs/jobs.mock';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  template: `
  <h2 class="text-2xl font-bold mb-6">Vagas disponíveis</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      @for (job of jobs; track job.id) {
        <app-job-card [job]="job"></app-job-card>
      }
    </div>
    `
})
export class JobsPage {
  jobs = JOBS_MOCK;
}
