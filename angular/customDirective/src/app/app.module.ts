import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetColorDirective } from './set-color.directive';
import { MyIfDirective } from './myIf.directive';
import { MyIfV2Directive } from './myIfv2.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetColorDirective,
    MyIfDirective,
    MyIfV2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
