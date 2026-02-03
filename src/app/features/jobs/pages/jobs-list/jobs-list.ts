import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-list.html',
})
export class JobsListComponent {
  jobs: Job[];

  constructor(private jobsService: JobsService) {
    this.jobs = this.jobsService.getJobs();
  }
}
