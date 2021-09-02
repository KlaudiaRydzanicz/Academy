import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  @Input() course: Course;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentCourse: Course = null;
  message = '';
  statuses = Course.statuses();
  difficult = Course.difficulties();
  key = '';

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = params.key;
    });
    CourseService.getCourse(this.key).then((snapshot) => {
      if (snapshot.exists()) {
        this.currentCourse = snapshot.val();
        console.log(this.currentCourse);
      }
    });
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    console.log(this.currentCourse);
  }

  updateCourse(): void {
    const data = {
      name: this.currentCourse.name,
      description: this.currentCourse.description,
      difficult: this.currentCourse.difficulty,
      status: this.currentCourse.status,
      category: this.currentCourse.category,
      date: this.currentCourse.createdAt
    };
    console.log(data);
    this.courseService.update(this.key, data)
      .then(() =>
        console.log(this.currentCourse.key)
      )
      .catch(err => console.error(err));
  }

  deleteTutorial(): void {
    this.courseService.delete(this.currentCourse.key)
      .then(() => {
        this.refreshList.emit();
        this.message = "The tutorial was deleted!"
      });
  }

}
