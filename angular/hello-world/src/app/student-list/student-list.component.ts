import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private _studentService : StudentService) { }

  students: any;

  ngOnInit(): void {
    //this.students = this._studentService.getStudents();
    this._studentService.getStudentsV2().subscribe(data =>{
      this.students = data;
    });
  }

}
