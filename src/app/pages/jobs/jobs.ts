import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../../features/jobs/job-card/job-card';
import { JOBS_MOCK } from '../../features/jobs/jobs.mock';

@Component({
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  template: `
    <h2 class="text-2xl font-bold mb-6">Vagas disponíveis</h2>

    @if (jobs.length === 0) {
      <div class="text-center text-gray-500 mt-20">
        <p class="text-lg">😕 Nenhuma vaga encontrada</p>
        <p class="mt-2">Tente ajustar os filtros</p>
      </div>
    } @else {
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (job of jobs; track job.id) {
          <app-job-card [job]="job" />
        }
      </div>
    }
  `
})
export class JobsPage {
  jobs = JOBS_MOCK;
}
