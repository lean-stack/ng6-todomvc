import { Injectable } from '@angular/core';
import { StoreService } from './store.service.interface';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { environment } from '../../../environments/environment';

const url = environment.resourceUrl;

@Injectable()
export class HttpStoreService extends StoreService {

  constructor(private http: HttpClient) {
    super();
  }

  async getAll(): Promise<Todo[]> {
    // Variante 1: Extended
    // return new Promise<Todo[]>( (resolv, reject) => {
    //   this.http.get<Todo[]>(url).subscribe( data => {
    //     resolv(data);
    //   });
    // });
    // Variante 2: Observable-API
    return this.http.get<Todo[]>(url).toPromise();
  }

  create(txt: string): Promise<Todo> {
    return this.http.post<Todo>(url, {
      title: txt,
      completed: false
    }).toPromise();
  }

  update(todo: Todo): Promise<Todo> {
    return this.http
      .put<Todo>(url + '/' + todo.id, todo).toPromise();
  }

  async remove(id: number): Promise<Todo> {
    return this.http
      .delete<Todo>(url + '/' + id).toPromise();
  }

}
