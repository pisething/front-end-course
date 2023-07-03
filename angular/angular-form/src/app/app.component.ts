import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  subjects = ["Java","PHP","C#"];
  student = new Student("Thida","Female","dara@gmail.com","Java");
}
