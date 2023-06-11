import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() parentData ="";

  @Input("myGender") gender = "";

  @Output() myChildEvent = new EventEmitter();

  age = 18;
 
  constructor() { }

  ngOnInit(): void {
  }

  sendAge(){
    this.myChildEvent.emit(this.age);
  }

}
