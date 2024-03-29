import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  // on toggle
  onToggle(todo) {
    // Toggle UI
    todo.completed = !todo.completed;
    // Toggle on Srever
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  // on delete
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
