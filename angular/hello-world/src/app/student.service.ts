import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "/assets/data/students.json";

  constructor(private http: HttpClient) { }

  getStudents(){
    let students = [
      {name: "Dara", gender: "male", age:23},
      {name: "Thida", gender: "female", age:18},
      {name: "Tola", gender: "male", age:22},
      {name: "Kim", gender: "male", age:14},
      {name: "Socheata", gender: "female", age:24},
    ];

    return students;
  }

  getStudentsV2() : Observable<any[]>{
     return this.http.get<any[]>(this.url);
  }
}
