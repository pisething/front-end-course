import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = [
    {name: "Dara", gender: "male", age:23},
    {name: "Thida", gender: "female", age:18},
    {name: "Tola", gender: "male", age:22},
    {name: "Kim", gender: "male", age:14},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
