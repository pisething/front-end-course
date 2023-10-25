import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe';

  constructor(public auth: AuthService,
    private router: Router){}

  doLogOut(){
    this.auth.logOut();
    this.router.navigate(["/article"]);
  }
}
