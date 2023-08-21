import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  register(user: any){
    return this.http.post<any>(this.baseUrl + "register",user);
  }

  login(user: any){
    return this.http.post<any>(this.baseUrl + "login",user);
  }

  hasToken(): boolean{
    return !!localStorage.getItem('token');
  }
}
