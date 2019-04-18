import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'todo one',
        completed: false
      },
      {
        id: 2,
        title: 'todo two',
        completed: true
      },
      {
        id: 3,
        title: 'todo three',
        completed: false
      }
    ];
  }

}
