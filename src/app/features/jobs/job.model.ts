export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'CLT' | 'PJ' | 'Freelance' | 'Estágio';
  level: 'Júnior' | 'Pleno' | 'Sênior';
  salary: string;
  description: string;
  tags: string[];
}
