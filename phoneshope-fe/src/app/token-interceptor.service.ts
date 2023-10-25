import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let addHeader = req.clone({
      setHeaders : {
        //Authorization: 'Beaer ' + this.auth.getToken()
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(addHeader);
  }
}
