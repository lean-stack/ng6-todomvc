import { Component, OnInit } from '@angular/core';
import { State } from '../model/state';

@Component({
  selector: 'todo-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  public state: State;

  constructor() { }

  private lastId = 0;

  ngOnInit() {
    this.state = new State();
    this.state.todos = [];
  }

  createTodo(title: string) {
    const state = new State();
    state.todos = this.state.todos;
    state.todos.push({
      id: ++this.lastId,
      title: title,
      completed: false
    });
    this.state = state;
  }
}
