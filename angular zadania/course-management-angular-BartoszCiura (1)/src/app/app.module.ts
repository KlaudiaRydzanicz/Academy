import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesListComponent} from './components/courses-list/courses-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {CourseDetailComponent} from './components/course-detail/course-detail.component';
import {AddLessonComponent} from './components/lessons/add-lesson/add-lesson.component';
import {LessonListComponent} from './components/lessons/lesson-list/lesson-list.component';
import {LessonDetailComponent} from './components/lessons/lesson-detail/lesson-detail.component';
import { FormCourseComponent } from './components/form-course/form-course.component';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import { ConvertDatePipe } from './convert-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseDetailComponent,
    AddLessonComponent,
    LessonListComponent,
    LessonDetailComponent,
    FormCourseComponent,
    ConvertDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgxBootstrapConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
