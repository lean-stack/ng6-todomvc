import { Injectable } from '@angular/core';
import { StoreService } from './store.service.interface';
import { Todo } from '../model/todo';

@Injectable()
export class LocalStoreService extends StoreService {

  async getAll(): Promise<Todo[]> {
    return this.loadData().todos;
  }

  async create(txt: string): Promise<Todo> {
    const data = this.loadData();
    const todo = {
      id: ++data.lastId,
      title: txt,
      completed: false
    };
    data.todos.push(todo);
    this.saveData(data);
    return todo;
  }

  async update(todo: Todo): Promise<Todo> {
    const data = this.loadData();
    const todoIndex = data.todos.findIndex( t => t.id === todo.id);
    Object.assign( data.todos[todoIndex], todo);
    this.saveData(data);
    return data.todos[todoIndex];
  }

  async remove(id: number): Promise<Todo> {
    const data = this.loadData();
    const todoIndex = data.todos.findIndex( t => t.id === id);
    const deletedTodos = data.todos.splice(todoIndex, 1);
    this.saveData(data);
    return deletedTodos[0];
  }

  async removeCompleted(): Promise<Todo[]> {
    const data = this.loadData();
    const deletedTodos: Todo[] = [];
    data.todos = data.todos.reduce( (remaining, t) => {
      t.completed ? deletedTodos.push(t) : remaining.push(t);
      return remaining;
    }, []);
    this.saveData(data);
     return deletedTodos;
  }

  private loadData(): { todos: Todo[], lastId: number } {
    if (localStorage.getItem('todos') === null) {
      return { todos: [], lastId: 0};
    } else {
      return {
        todos: JSON.parse(localStorage['todos']),
        lastId: JSON.parse(localStorage['lastId'])
      };
    }
  }

  private saveData(data: { todos, lastId }) {
    localStorage['todos'] = JSON.stringify(data.todos);
    localStorage['lastId'] = data.lastId;
  }
}
