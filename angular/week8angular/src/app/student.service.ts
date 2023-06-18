import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(){
    let students = [
      {name: "Dara", gender: "male", age:23},
      {name: "Thida", gender: "female", age:18},
      {name: "Tola", gender: "male", age:22},
      {name: "Kim", gender: "male", age:14},
    ];

    return students;
  }
}
