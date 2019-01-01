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
