import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "http://localhost:3000/registerStudent"
  constructor(private http: HttpClient) { }

  saveStudent(student: Student){
    return this.http.post(this.url,student);
  }
}
