import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", redirectTo: "/list", pathMatch: "full"},
  {path: "list", component: StudentListComponent},
  {path: "detail", component: StudentDetailComponent},
  {path: "detail/:id", component: StudentDetailComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [StudentListComponent, StudentDetailComponent, PageNotFoundComponent];
