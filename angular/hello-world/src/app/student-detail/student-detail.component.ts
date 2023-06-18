import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  students : any;

  constructor(private stService: StudentService) { }

  ngOnInit(): void {
    this.students = this.stService.getStudents();
  }

}
