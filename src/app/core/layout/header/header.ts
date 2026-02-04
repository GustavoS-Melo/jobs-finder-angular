import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterLink],
  template: `<header class="bg-zinc-900 text-white">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">JobsFinder</h1>

        <nav class="flex gap-6">
          <a routerLink="/" class="hover:text-indigo-400">Home</a>
          <a routerLink="/jobs" class="hover:text-indigo-400">Vagas</a>
          <a routerLink="/favorites" class="hover:text-indigo-400">Favoritos</a>
        </nav>
      </div>
    </header>`
})
export class HeaderComponent {}
