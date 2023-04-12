import { Injectable } from '@angular/core';
import { HttpServices } from './httpServices';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private httpService: HttpServices) { }

  getUsers(filter = {}) {
    return this.httpService.post("users", filter);
  }
}
