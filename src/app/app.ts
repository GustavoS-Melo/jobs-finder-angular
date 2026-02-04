import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="max-w-6xl mx-auto px-4 py-6">
      <router-outlet />
    </main>`
})
export class App {
  protected readonly title = signal('jobs-finder-angular');
}
