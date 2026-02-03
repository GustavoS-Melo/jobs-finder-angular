import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job.model';
import { JobCardComponent } from '../../components/job-card/job-card';
import { FormsModule } from '@angular/forms';

type JobLevel = 'Júnior' | 'Estágio' | '';
type JobLocation = 'Remoto' | 'Híbrido' | 'Presencial' | '';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule, JobCardComponent, FormsModule],
  templateUrl: './jobs-list.html',
})
export class JobsListComponent {
  jobs: Job[];
  filteredJobs: Job[] = [];

  selectedLevel: JobLevel = '';
  selectedLocation: JobLocation = '';

  constructor(private jobsService: JobsService) {
    this.jobs = this.jobsService.getJobs();
    this.filteredJobs = this.jobs;
  }

  filterJobs(){
    this.filteredJobs = this.jobs.filter(job => {
      const levelMatch =! this.selectedLevel || job.level === this.selectedLevel;

    const locationMatch =! this.selectedLocation || job.location === this.selectedLocation;

    return levelMatch && locationMatch;
    });
  }
}
