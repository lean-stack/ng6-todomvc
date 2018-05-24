import { Injectable } from '@angular/core';
import { State } from '../model/state';
import { StoreService } from './store.service.interface';

@Injectable()
export class StateService {

  public state: State;
  public storeOffline = false;

  constructor(private store: StoreService) {
    this.state = new State();

    store.getAll().then(
      todos => { this.state.todos = todos; }
    ).catch(() => {
      this.storeOffline = true;
    });

  }

}
