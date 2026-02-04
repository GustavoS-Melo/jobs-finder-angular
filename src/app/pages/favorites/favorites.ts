import { Component } from "@angular/core";
import { JobCardComponent } from '../../features/jobs/job-card/job-card';
import { FavoritesService } from '../../features/jobs/favorites.service';
import { computed } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [JobCardComponent],
  template:  `
    <h2 class="text-2xl font-bold mb-6">Vagas Favoritas</h2>

    @if (favorites().length === 0) {
      <p class="text-gray-600">Nenhuma vaga favoritada ainda.</p>
    }

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      @for (job of favorites(); track job.id) {
        <app-job-card [job]="job"></app-job-card>
      }
    </div>
  `
})
export class FavoritesPage {
  favorites = computed(() => this.favoriteService.favorites());

  constructor(private favoriteService: FavoritesService){}
}
