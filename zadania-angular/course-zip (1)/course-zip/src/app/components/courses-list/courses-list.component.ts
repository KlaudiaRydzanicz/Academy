import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: any;
  currentCourse: any;
  currentIndex = -1;
  title = '';

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.currentCourse = null;
    this.currentIndex = -1;
    this.retrieveCourses();
  }

  retrieveCourses(): void {
    this.courseService.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      })
      ))
    ).subscribe(data => {
      this.courses = data;
    });
  }
  setActiveCourse(course, index): void{
    this.currentCourse = course;
    this.currentIndex = index;
  }
}
