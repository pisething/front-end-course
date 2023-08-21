import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {
    username: '',
    password:''
  }
  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    //console.log(this.registerData);
    this.authService.register(this.registerData).subscribe(res =>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/paid_article']);
    }, err =>{
      console.log(err);
    })
  }

}
