import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo';
import { CommandService } from '../service/command.service';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemComponent implements OnInit {

  @Input()
  public todo: Todo;

  @Output()
  public deleteMe = new EventEmitter<Todo>();

  public editMode = false;
  public editText: string;

  constructor(private cmdService: CommandService) {}

  ngOnInit() {
    this.editText = this.todo.title;
  }

  remove() {
    this.deleteMe.emit(this.todo);
  }

  toggle() {
    this.todo.completed = !this.todo.completed;
    this.cmdService.update(this.todo);
  }

  beginEdit() {
    this.editMode = true;
  }

  cancelEdit() {
    this.editMode = false;
    this.editText = this.todo.title;
  }

  commitEdit() {
    // Teste, ob der Edit-Mode schon verlassen wurde
    if (this.editMode) {
      this.editMode = false;
      if ( this.editText.trim().length === 0) {
        this.cmdService.remove(this.todo.id);
      } else {
        this.todo.title = this.editText;
        this.cmdService.update(this.todo);
      }
    }
  }
}
