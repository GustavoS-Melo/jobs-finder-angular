import { Injectable, signal } from '@angular/core';
import { Job } from '../jobs/job.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private _favorites = signal<Job[]>([]);

  favorites() {
    return this._favorites();
  }

  isFavorite(jobId: number) {
    return this._favorites().some(job => job.id === jobId);
  }

  add(job: Job) {
    if (!this.isFavorite(job.id)) {
      this._favorites.update(favs => [...favs, job]);
    }
  }

  remove(jobId: number) {
    this._favorites.update(favs =>
      favs.filter(job => job.id !== jobId)
    );
  }

  toggle(job: Job) {
    this.isFavorite(job.id)
      ? this.remove(job.id)
      : this.add(job);
  }
}
