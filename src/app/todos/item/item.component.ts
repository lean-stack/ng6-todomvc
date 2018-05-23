import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
