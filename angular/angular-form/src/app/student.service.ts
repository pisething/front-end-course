import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "http://localhost:3000/registerStudent"
  constructor(private http: HttpClient) { }

  saveStudent(student: Student){
    return this.http.post(this.url,student).pipe(catchError(this.handleError));
  }

  handleError(error : HttpErrorResponse){
    let errorMessage = error.message || "Error happen from server";
    return throwError(errorMessage );
  }

}
