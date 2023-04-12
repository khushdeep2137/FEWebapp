import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Doe', age: 25, city: 'San Francisco' },
    { id: 3, name: 'Bob Smith', age: 40, city: 'Chicago' },
    { id: 4, name: 'Alice Johnson', age: 35, city: 'Los Angeles' },
    { id: 5, name: 'David Lee', age: 28, city: 'Boston' },
    { id: 6, name: 'Maria Garcia', age: 33, city: 'Miami' },
    { id: 7, name: 'Michael Brown', age: 45, city: 'Houston' },
   
  ];

  constructor() { }

  getData(): Observable<any> {
    return of(this.data);
  }
}
