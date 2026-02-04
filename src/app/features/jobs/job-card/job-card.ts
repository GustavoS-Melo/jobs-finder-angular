import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-card',
  standalone: true,
  template: `
    <div
      class="border rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
      (click)="goToDetails()"
    >
      <h3 class="text-lg font-semibold">{{ job.title }}</h3>
      <p class="text-sm text-gray-600">{{ job.company }} • {{ job.location }}</p>

      <div class="flex gap-2 mt-3 flex-wrap">
        <span class="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded">
          {{ job.type }}
        </span>
        <span class="px-2 py-1 text-xs bg-zinc-100 rounded">
          {{ job.level }}
        </span>
      </div>

      <p class="mt-3 text-sm text-gray-700">
        {{ job.description }}
      </p>

      <p class="mt-3 font-medium text-sm">
        {{ job.salary }}
      </p>
    </div>
  `
})
export class JobCardComponent {
  @Input({ required: true }) job!: Job;

  constructor(private router: Router){}

  goToDetails(){
    this.router.navigate(['jobs', this.job.id]);
  }
}
