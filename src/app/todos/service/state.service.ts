import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public state: State;

  constructor(private store: StoreService) {

    this.state = new State();
    store.getAll().then(
      todos =>  { this.state.todos = todos; }
    );
  }
}
