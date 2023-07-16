import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  subjects = ["Java","PHP","C#"];
  student = new Student("Thida","Female","dara@gmail.com","");
  isValidSubject = false;
  isSubmitted = false;

  constructor(private studentService: StudentService){

  }

  selectSubject(subject: string){
    if(subject === 'default'){
      this.isValidSubject = false;
    }else{
      this.isValidSubject = true;
    }
  }

  doSubmit(studentForm : any){
    this.isSubmitted = true;
    console.log("Submit works");
    
    // this.studentService.saveStudent(this.student).subscribe(data =>{
    //   console.log(data);
    // }, error =>{
    //   console.log("Something error");
    //   console.log(error);
    // });

    console.log(studentForm);
  }
}
