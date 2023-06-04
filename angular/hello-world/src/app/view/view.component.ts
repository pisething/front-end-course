import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  myHeader = "text-header";
  hasError = false;
  isItalic = true;
  myClasses = {
    "danger" : this.hasError,
    "italic" : this.isItalic,
    "text-success": !this.hasError
  }

  myStyle = {
    color: 'green',
    fontStyle : 'italic',
    backgroundColor: 'yellow'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
