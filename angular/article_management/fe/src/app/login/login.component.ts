import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password:''
  }

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginData).subscribe(res =>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/paid_article']);
    }, err =>{
      console.log(err);
    })
  }

}
