import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {
  @Input() isLogIn!: boolean;

  // private _loggedIn!: boolean;
  // using getter and setter
  // get isLogIn(){
  //   return this._loggedIn;
  // }

  // @Input()
  // set isLogIn(value: boolean){
  //   if(value){
  //     this.message = "Hello Piseth"
  //   }else{
  //     this.message = "Please Log In";
  //   }
  // }

  message!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    let LongInChange = changes['isLogIn'];
    if(LongInChange.currentValue){
      this.message = "Welcome Piseth";
    }else{
      this.message = "Please Log In";
    }
  }

  

}
