import { Todo } from './todo';

export class State {

  public todos: Todo[] = [];

  get hasItems(): boolean {
    return this.todos.length > 0;
  }

  get hasActiveItems(): boolean {
    return this.todos.findIndex( t => !t.completed ) !== -1;
  }

  get hasCompletedItems(): boolean {
    return this.todos.findIndex( t => t.completed ) !== -1;
  }

  get activeCount(): number {
    return this.todos.reduce( (count, t) => {
      if (!t.completed) { ++count; }
      return count;
    }, 0);
  }

}
