import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
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
