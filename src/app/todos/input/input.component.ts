import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public title = '';

  @Output()
  public create = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  createTodo() {
    this.create.emit(this.title);
    this.title = '';
  }
}
