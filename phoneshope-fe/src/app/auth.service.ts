import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }

  // register(user: any){
  //   return this.http.post<any>(this.baseUrl + "register",user);
  // }

  login(user: any){
    return this.http.post<any>(this.baseUrl + "login",user);
  }

  hasToken(): boolean{
    //return !!localStorage.getItem('token');
    return !!this.getToken();
  }

  getToken(){
    return localStorage.getItem('token');
  }

  // logOut(){
  //   localStorage.removeItem('token');
  // }
}
