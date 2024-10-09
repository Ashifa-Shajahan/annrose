import { Component, Input } from '@angular/core';
import { todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() task: todo = {
    Task:"Get cheese",
    note:'Before Tom wakes up',
  };
}
