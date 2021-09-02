import { Component, OnInit } from '@angular/core';
import {LessonService} from "../../../services/lesson.service";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  lessons: any;
  currentLesson: any;
  currentIndex = -1;
  title = '';
  key = '';
  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = params.key;
    });
    CourseService.getCourse(this.key).then((snapshot) => {
      if (snapshot.exists()) {
        this.currentLesson = snapshot.val();
      }
    });
    this.refreshList();
  }


  refreshList(): void{
    this.currentLesson = null;
    this.currentIndex = -1;
    this.retrieveLessons();
  }


  retrieveLessons(): void {
    this.lessonService.getAll(this.key).snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      })
      ))
    ).subscribe(data => {
      console.log(data);
      this.lessons = data;
    });
  }

  setActivateLesson(lesson, index): void {
    this.currentLesson = lesson;
    this.currentIndex = index;
  }
}
