import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private stateSrv: StateService, private store: StoreService) { }

  async create(txt) {
    const todo = await this.store.create(txt);
    this.stateSrv.state.todos.push(todo);
  }

  update(todo) {}

  remove(id) {}
  removeCompleted() {}

}
