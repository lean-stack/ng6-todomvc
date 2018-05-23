import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../model/todo';

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

  constructor() {}

  ngOnInit() {
    this.editText = this.todo.title;
  }

  remove() {
    this.deleteMe.emit(this.todo);
  }

  toggle() {
    console.log('Todo state toggled');
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
      this.todo.title = this.editText;
      console.log('Todo title edited.');
    }
  }
}
