import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesListComponent} from "./components/courses-list/courses-list.component";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {CourseDetailComponent} from "./components/course-detail/course-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesListComponent},
  {path: 'add', component: AddCourseComponent},
  {path: 'detail/:key', component: CourseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
