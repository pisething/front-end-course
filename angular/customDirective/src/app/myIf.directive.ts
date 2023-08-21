import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[appMyIf]'
  })
export class MyIfDirective implements OnChanges{

   @Input() appMyIf!: number;

   constructor(private vc: ViewContainerRef, private template: TemplateRef<any>){}

   
   ngOnChanges(value: SimpleChanges): void {
       if(this.appMyIf %2 === 0){
        this.vc.createEmbeddedView(this.template);
       }else{
        this.vc.clear();
       }
   }

}