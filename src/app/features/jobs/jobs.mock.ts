import { Job } from './job.model';

export const JOBS_MOCK: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer Angular',
    company: 'Tech Solutions',
    location: 'Remoto',
    type: 'CLT',
    level: 'Júnior',
    salary: 'R$ 4.000 – R$ 6.000',
    description: 'Atuar no desenvolvimento de aplicações Angular modernas.',
    tags: ['Angular', 'TypeScript', 'Tailwind']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Startup X',
    location: 'São Paulo - SP',
    type: 'PJ',
    level: 'Pleno',
    salary: 'R$ 7.000 – R$ 9.000',
    description: 'Construção de interfaces performáticas e acessíveis.',
    tags: ['Angular', 'RxJS', 'CSS']
  }
];
