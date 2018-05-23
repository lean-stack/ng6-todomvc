import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';
import { CommandService } from '../service/command.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  public todos: Todo[];

  constructor(private cmdService: CommandService) { }

  ngOnInit() {

  }

  removeTodo(todo: Todo) {
    this.cmdService.remove(todo.id);
  }
}
