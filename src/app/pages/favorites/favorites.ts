import { Component, inject, computed } from "@angular/core";
import { JobCardComponent } from '../../features/jobs/job-card/job-card';
import { FavoritesService } from '../../features/jobs/favorites.service';

@Component({
  standalone: true,
  imports: [JobCardComponent],
  template: `
    <h2 class="text-2xl font-bold mb-6">Vagas favoritas</h2>

    @if (favorites().length === 0) {
      <div class="text-center text-gray-500 mt-20">
        <p class="text-lg">💔 Nenhuma vaga favoritada ainda</p>
        <p class="mt-2">Explore vagas e marque suas favoritas</p>
      </div>
    } @else {
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (job of favorites(); track job.id) {
          <app-job-card [job]="job" />
        }
      </div>
    }
  `
})

export class FavoritesPage {
  private favoritesService = inject(FavoritesService);

  favorites = computed(() => this.favoritesService.favorites());
}
