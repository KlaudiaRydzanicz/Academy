import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesListComponent} from "./components/courses-list/courses-list.component";
import {CourseDetailComponent} from "./components/course-detail/course-detail.component";
import {FormCourseComponent} from "./components/form-course/form-course.component";

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesListComponent},
  {path: 'add', component: FormCourseComponent},
  {path: 'detail/:key', component: CourseDetailComponent},
  {path: 'edit/:key', component: FormCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
