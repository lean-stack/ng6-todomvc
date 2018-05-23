import { Component, OnInit, Input } from '@angular/core';
import { State } from '../model/state';

@Component({
  selector: 'todo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  public state: State;

  constructor() { }

  ngOnInit() {
  }

  setAllStates() {
    if (this.state.hasActiveItems) {
      this.state.todos.forEach( t => {t.completed = true; });
    } else {
      this.state.todos.forEach( t => {t.completed = false; });
    }
  }
}
