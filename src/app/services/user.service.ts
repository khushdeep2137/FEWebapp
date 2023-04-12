import { Injectable } from '@angular/core';
import { HttpServices } from './httpServices';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private httpService:HttpServices) { }

  getUser() {
    return this.httpService.get("user");
  }
}
