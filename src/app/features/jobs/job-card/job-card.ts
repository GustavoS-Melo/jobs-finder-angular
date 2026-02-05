import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../job.model';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-job-card',
  standalone: true,
  template: `
    <div
      class="border rounded-xl p-5 shadow-sm hover:shadow-md transition relative cursor-pointer"
      (click)="goToDetails()"
    >
      <button
        (click)="toggleFavorite($event)"
        class="absolute top-4 right-4 text-xl"
        aria-label="Favoritar vaga"
      >
        {{ isFavorite() ? '❤️' : '🤍' }}
      </button>

      <h3 class="text-lg font-semibold">{{ job.title }}</h3>
      <p class="text-sm text-gray-600">
        {{ job.company }} • {{ job.location }}
      </p>

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

  private router = inject(Router);
  private favoritesService = inject(FavoritesService);

  goToDetails() {
    this.router.navigate(['jobs', this.job.id]);
  }

  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.favoritesService.toggle(this.job);
  }

  isFavorite() {
    return this.favoritesService.isFavorite(this.job.id);
  }
}
