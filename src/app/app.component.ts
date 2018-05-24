import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { StateService } from './todos/service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {

  constructor(private stateSrv: StateService) {}

  name = 'Micha Alt';
  url = 'https://lean-stack.de';
  projectUrl = 'http://todomvc.com';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change detection run in app.component');
  }
}
