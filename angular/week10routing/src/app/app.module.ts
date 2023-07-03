import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesDetail2Component } from './employees-detail2/employees-detail2.component';


@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    EmployeesComponent,
    EmployeesDetailComponent,
    EmployeesDetail2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
