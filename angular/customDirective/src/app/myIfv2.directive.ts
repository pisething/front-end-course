import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[appMyIfv2]'
  })
export class MyIfV2Directive{

   constructor(private vc: ViewContainerRef, private template: TemplateRef<any>){}

   @Input()
   set appMyIfv2(value: boolean){
         if(value){
        this.vc.createEmbeddedView(this.template);
       }else{
        this.vc.clear();
       }
   }

   
  

}