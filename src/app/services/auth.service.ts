import { Injectable } from '@angular/core';
import { HttpServices } from './httpServices';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService:HttpServices) { }

  login(data:any){
    return this.httpService.post("/login",data);
    

  }

 
}
