import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective implements OnInit{
  @Input() hcolor!: string;
  @Input() defaultcolor!: string;

  constructor(private element: ElementRef) { 
    //this.element.nativeElement.style.color="gray";
    
    
  }
  ngOnInit(): void {
    this.element.nativeElement.style.color=this.defaultcolor;
  }

  @HostListener("mouseenter")
  doMouseEnter(){
    this.element.nativeElement.style.color=this.hcolor;
  }

  @HostListener("mouseout")
  doMouseOut(){
    this.element.nativeElement.style.color="red";
  }

}
