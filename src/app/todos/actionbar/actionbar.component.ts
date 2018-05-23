import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { State } from '../model/state';

@Component({
  selector: 'todo-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionbarComponent implements OnInit, OnChanges {


  @Input()
  public state: State;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CD in Actionbar', changes);
  }

  clearCompleted() {
    this.state.todos = this.state.todos.filter( t => !t.completed);
  }
}
