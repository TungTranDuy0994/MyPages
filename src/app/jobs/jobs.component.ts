import { Component, OnInit } from '@angular/core';
import {Job} from '../job';
import {JOBS} from '../mock-jobs';
import {JobService} from '../job.service';
import {MesagesService} from '../mesages.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
  job = JOBS[0];

  // jobs = JOBS;
  jobs: Job[] = [];
  selectedJob = this.job;


  constructor(private jobService: JobService, private mesagesService: MesagesService) { }
  
  ngOnInit(): void {
  	this.getJobs();
  }
  
  onSelect(job: Job): void{
    // "this" is jobs component 
    this.selectedJob = job;
    this.mesagesService.add(`you are selected job ${job.name}`);
  }

  getJobs(): void {
  	this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

}
