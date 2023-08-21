import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private messageService: MessageService){}
 
  greeting(){
    this.messageService.sendMessage("Hello child");
  }

 askForLocation(){
  this.messageService.sendMessage("Where are you?");
 }

 
}
