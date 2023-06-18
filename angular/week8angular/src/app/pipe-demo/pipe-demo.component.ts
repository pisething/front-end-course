import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  public name = "Dara";

  text = "welcome to cambodia";

  stu = {name: "Dara", gender: "male", age:23};
  myNumber = 6.47;

  dob = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
