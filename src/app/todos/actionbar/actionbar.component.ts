import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { State } from '../model/state';

@Component({
  selector: 'todo-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent implements OnInit {


  @Input()
  public state: State;

  constructor() { }

  ngOnInit() {
  }

  clearCompleted() {
    this.state.todos = this.state.todos.filter( t => !t.completed);
  }
}
