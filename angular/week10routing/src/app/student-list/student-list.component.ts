import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students = [
    {id: 1, name: "Dara", gender: "male"},
    {id: 2, name: "Thida", gender: "female"},
    {id: 3, name: "Seyha", gender: "male"},
  ];

  lastVisitedId = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.lastVisitedId = parseInt(paramMap.get("myId") || "0");
    });
  }

  goToDetail(studentId: number){
    //alert(studentId);
    this.router.navigate(["/detail",studentId]);
  }

  checkHighLigh(studentId: number){
    return studentId === this.lastVisitedId;
  }

}
