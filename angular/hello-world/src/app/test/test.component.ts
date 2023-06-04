import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  //template : '<h2>Welcome to Cambodia</h2>',
  
  template : `
     <h2 class="success">Welcome to Cambodia</h2>
     <h2 [class]="myClass">Sea game 2023</h2>
    `,
    
  //styleUrls: ['./test.component.css']
  styles: [`
    .success{color:green}

    .danger{color:red}
  
  `]
  
})
export class TestComponent implements OnInit {
  public name = "Dara";
  public locationInfo = window.location.href;
  myId = "001";
  myClass = "danger";

  isDisable = true;

  constructor() {
    console.log("In constructor");
   }

  ngOnInit(): void {
    console.log("Test component is created");
  }

  test(){
    //return 6+5;
    //console.log("Test");
  }

}
