import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {map} from 'rxjs/operators';
import {NgxBootstrapConfirmService} from "ngx-bootstrap-confirm";

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

  constructor(private courseService: CourseService, private ngxBootstrapConfirmService: NgxBootstrapConfirmService) {
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
      console.log(data);
      this.courses = data;
    });
  }
  setActiveCourse(course, index): void{
    this.currentCourse = course;
    this.currentIndex = index;
  }

  deleteCourse(key: string): void {
    this.courseService.delete(key)
      .then(() => {
        alert('The course was deleted succesfully!!');
      }).catch(err => console.error(err));
  }

  removeAllCourses(): void {
    this.courseService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.error(err));
  }

  deleteCoursePopup(key: string): void {
    const options = {
      title: 'Sure you want to delete this course?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    };
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        this.deleteCourse(key);
      } else {
        console.log();
      }
    });
  }

  deleteAllPopup(): void {
    const options = {
      title: 'Sure you want to delete all courses?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    };
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        this.removeAllCourses();
      }
    });
  }
}
