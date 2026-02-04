import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JOBS_MOCK } from '../../features/jobs/jobs.mock';
import { Job } from '../../features/jobs/job.model';

@Component({
  selector: 'app-job-details',
  standalone: true,
  template: `
    @if (job) {
      <div class="max-w-3xl">
        <h2 class="text-3xl font-bold mb-2">{{ job.title }}</h2>
        <p class="text-gray-600 mb-4">
          {{ job.company }} • {{ job.location }}
        </p>

        <div class="flex gap-3 mb-6 flex-wrap">
          <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded">
            {{ job.type }}
          </span>
          <span class="px-3 py-1 text-sm bg-zinc-100 rounded">
            {{ job.level }}
          </span>
        </div>

        <p class="mb-4 text-gray-700">
          {{ job.description }}
        </p>

        <p class="font-semibold mb-6">
          💰 {{ job.salary }}
        </p>

        <div class="flex gap-2 flex-wrap">
          @for (tag of job.tags; track tag) {
            <span class="px-2 py-1 text-xs bg-zinc-200 rounded">
              {{ tag }}
            </span>
          }
        </div>
      </div>
    }
  `
})
export class JobDetailsPage {
  job?: Job;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = JOBS_MOCK.find(job => job.id === id);
  }
}
