import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { TestChildComponent } from './test-child/test-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    StructuralDirectiveComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
