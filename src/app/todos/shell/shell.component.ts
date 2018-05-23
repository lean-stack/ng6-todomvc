import { Component, OnInit } from '@angular/core';
import { State } from '../model/state';
import { StateService } from '../service/state.service';
import { CommandService } from '../service/command.service';

@Component({
  selector: 'todo-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  public state: State;

  constructor(private stateService: StateService, private cmdService: CommandService) { }

  private lastId = 0;

  ngOnInit() {
    this.state = this.stateService.state;
  }

  createTodo(title: string) {
    this.cmdService.create(title);
  }
}
