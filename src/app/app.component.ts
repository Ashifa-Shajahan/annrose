import { Component } from '@angular/core';
import { todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to_do';
  tasks: todo[]=[];
  onTaskAdd(task:todo){
    this.tasks.push(task);
  }

  items:todo[]=[
    {
      Task :"Annoy Tom",
      note : "Plan",
    },
    {
      Task :"Brush teeth",
      note :"Find brush",
    },
    {
      Task :"Steal cheese",
      note :"Stay alert",
    }
  ]

}
