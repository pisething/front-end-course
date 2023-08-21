import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  question!: string;
  constructor(private messageService: MessageService){}
  ngOnInit(): void {
    this.messageService.message$.subscribe(text =>{
      //this.question = text;
      if(text === "Hello child"){
        this.question = "Hello App";
      }
      if(text === "Where are you?"){
        this.question = "I am at home";
      }
    });
  }
  
}
