import { Component, OnInit, Input } from '@angular/core';
import { State } from '../model/state';
import { CommandService } from '../service/command.service';

@Component({
  selector: 'todo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  public state: State;

  constructor(private cmdService: CommandService) { }

  ngOnInit() {
  }

  setAllStates() {
    if (this.state.hasActiveItems) {
      this.state.todos.forEach( t => {t.completed = true; this.cmdService.update(t); });
    } else {
      this.state.todos.forEach( t => {t.completed = false; this.cmdService.update(t); });
    }
  }
}
