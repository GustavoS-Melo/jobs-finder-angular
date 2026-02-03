import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.html',
})
export class JobDetailsComponent {
  job?: Job;

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService
  ){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.jobsService.getJobs().find(j => j.id === id);
  }
}
