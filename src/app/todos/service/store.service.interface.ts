import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable()
export abstract class StoreService {

  constructor() { }

  abstract async getAll(): Promise<Todo[]>;

  abstract async create(txt: string): Promise<Todo>;
  abstract async update(todo: Todo): Promise<Todo>;
  abstract async remove(id: number): Promise<Todo>;
  abstract async removeCompleted(): Promise<Todo[]>;
}
