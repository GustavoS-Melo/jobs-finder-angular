export interface Job {
  id: number;
  title: string;
  company: string;
  location: 'Remoto' | 'Híbrido' | 'Presencial';
  level: 'Estágio' | 'Júnior';
  description: string;
  tags: string[];
}
