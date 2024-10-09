import { Component, EventEmitter, Output, output } from '@angular/core';
import { todo } from '../todo.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
headingInp: string="";
noteInp: string="";


  @Output() onTask = new EventEmitter<todo>();
  addTask(){
    let todo: todo={
      Task : this.headingInp,
      note : this.noteInp,
    };
    this.onTask.emit(todo);
  }

}
