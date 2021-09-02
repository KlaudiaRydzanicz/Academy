import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddLessonComponent } from './components/lessons/add-lesson/add-lesson.component';
import { LessonListComponent } from './components/lessons/lesson-list/lesson-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    AddCourseComponent,
    CourseDetailComponent,
    EditCourseComponent,
    AddLessonComponent,
    LessonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
