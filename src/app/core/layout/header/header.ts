import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../../../features/jobs/favorites.service';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterModule],
  template: `
    <header class="bg-zinc-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">JobsFinder</h1>

      <nav class="flex items-center gap-6">
        <a routerLink="/" class="hover:underline">Home</a>
        <a routerLink="/jobs" class="hover:underline">Vagas</a>

        <a routerLink="/favorites" class="relative text-xl">
          ❤️
          @if (favoritesCount() > 0) {
            <span
              class="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5"
            >
              {{ favoritesCount() }}
            </span>
          }
        </a>
      </nav>
    </header>
    `
})
export class HeaderComponent {
  private favoritesService = inject(FavoritesService);

  favoritesCount = computed(
    () => this.favoritesService.favorites().length
  );
}
