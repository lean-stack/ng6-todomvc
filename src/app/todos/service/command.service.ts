import { Injectable } from '@angular/core';
import { StoreService } from './store.service.interface';
import { StateService } from './state.service';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private stateSrv: StateService, private store: StoreService) { }

  async create(txt: string): Promise<Todo> {
    // Bei einer Push-Strategie sollte natürlich (wie auch
    // bei allen folgenden Methoden) der State ersetzt werden
    // durch einen neuen mit den alten Todos plus das Neue
    const todo = await this.store.create(txt);
    this.stateSrv.state.todos.push(todo);
    return todo;
  }

  async update(todo): Promise<Todo> {
    // Bei einer Push-Strategie sollte natürlich das "neue"
    // Todo in den State gesetzt werden
    // Ansonsten ist das hier jetzt eine einfache "No-Op"
    await this.store.update(todo);
    return todo;
  }

  async remove(id) {
    // Push Strategie: neuer State
    await this.store.remove(id);
    const ix = this.stateSrv.state.todos.findIndex(t => t.id === id);
    const deletedTodos = this.stateSrv.state.todos.splice(ix, 1);
  }

  async removeCompleted() {
    // Push Strategie: neuer State
    const completedTodos =
      this.stateSrv.state.todos.filter( t => t.completed );
    completedTodos.forEach( async (todo) => {
      await this.store.remove(todo.id);
      const ix = this.stateSrv.state.todos.findIndex( t => t.id === todo.id);
      this.stateSrv.state.todos.splice(ix, 1);
    });
  }

}
