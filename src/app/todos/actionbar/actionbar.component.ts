import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { State } from '../model/state';
import { CommandService } from '../service/command.service';

@Component({
  selector: 'todo-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent implements OnInit {

  @Input()
  public state: State;

  constructor(private cmdService: CommandService) { }

  ngOnInit() {
  }

  clearCompleted() {
    this.cmdService.removeCompleted();
  }
}
