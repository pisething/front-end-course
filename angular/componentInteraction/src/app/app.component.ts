import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  login = false;
  
  title = 'componentInteraction';
  imagePath = 'assets/database.png';
  count=0;
  name="";
  username!: string;
 private _myname = "";

 @ViewChild("useranmeRef") useranmeTextfield!: ElementRef;

ngAfterViewInit(): void {
  //this.useranmeTextfield.nativeElement.focus();
}

 get myname(){
  return this._myname;
 }

 set myname(value: string){
  this._myname = value;
  if(this._myname === "piseth"){
    alert("Welcome Piseth");
  }
  
 }

  

  doCount(){
    this.count = this.count + 1;
  }

  checkName(value: string){
    this.username = value;
    if(this.username === "piseth"){
      alert("Hello Piseth");
    }
    //console.log("work correctly");
  }
}
