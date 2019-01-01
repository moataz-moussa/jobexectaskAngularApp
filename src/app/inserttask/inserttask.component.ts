import { Component, OnInit } from '@angular/core';
import { job } from '../job.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inserttask',
  templateUrl: './inserttask.component.html',
  styleUrls: ['./inserttask.component.css']
})
export class InserttaskComponent implements OnInit {
  private jobs: job[] = [];
   
  constructor() { }

  ngOnInit() {
    
  }
  //Gets input from the user from the form and push each job in to the job list
  onSubmitTask(form: NgForm){
    const value = form.value;
    const newJob = new job(value.jobname);
    this.jobs.push(newJob);
    form.reset();   
  }

  onRun(){
    console.log("ran");
  }

}
