import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private jobs: Job[] = [
    {
      id: 1,
      title: 'Front-End Júnior',
      company: 'Tech Solutions',
      location: 'Remoto',
      level: 'Júnior',
      description: 'Atuar no desenvolvimento de aplicações web com Angular.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      id: 2,
      title: 'Estágio Front-End',
      company: 'Startup X',
      location: 'Híbrido',
      level: 'Estágio',
      description: 'Auxiliar no desenvolvimento e manutenção de interfaces.',
      tags: ['JavaScript', 'CSS', 'Git'],
    },
  ];

  getJobs(): Job[] {
    return this.jobs;
  }
}
