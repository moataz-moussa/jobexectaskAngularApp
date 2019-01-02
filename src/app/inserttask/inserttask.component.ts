import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { job } from '../job.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inserttask',
  templateUrl: './inserttask.component.html',
  styleUrls: ['./inserttask.component.css']
})
export class InserttaskComponent implements OnInit {
  private jobs: job[] = [];
  numberOfThreads: number;
   
  constructor() { }

  ngOnInit() {
  

  }

  onInitialize(event: Event){
    this.numberOfThreads= (<HTMLInputElement>event.target).valueAsNumber;
    console.log(this.numberOfThreads);
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
