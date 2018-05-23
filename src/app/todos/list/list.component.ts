import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public todos: Todo[];

  constructor() { }

  ngOnInit() {

  }

  removeTodo(todo: Todo) {
    const ix = this.todos.findIndex( (t) => t.id === todo.id );
    this.todos.splice(ix, 1);

    // this.todos = this.todos.filter( (t) => t.id !== todo.id);
  }
}
