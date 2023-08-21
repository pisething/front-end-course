import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  
  canActivate() : boolean{
    let hasToken = this.authService.hasToken();
    if(hasToken){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
