import { Component } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config!: { [key: string]: string | Date };
  tasks: Task[] = [
    {
      name:'Siłownia',
      deadline: '2023-09-09',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2023-09-09',
      done: false,
    },
    {
      name: 'Sprzątanie',
      deadline: '2023-09-09',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: 'Lista zadań zbudowana w Angularze.',
        date: new Date()
      };
    }, 500);
  }
 clearTasks() {
  this.tasks = [];
 }

 

 createTask(name: string, deadline: string){
  const task: Task = {
    name,
    deadline,
    done: false,
 };
 this.tasks.push(task);
}
}