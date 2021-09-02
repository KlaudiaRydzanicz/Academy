import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Course} from '../../models/course';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentCourse?: Course;
  statuses: [number, string][] = [...Course.statuses()];
  difficulties: [number, string][] = [...Course.difficulties()];
  key = '';
  constructor(private courseService: CourseService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => this.key = params.key);
    if(!this.key){
      return;
    }
    CourseService.getCourse(this.key).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.currentCourse = new Course
        (this.key,
          data.name,
          data.category,
          data.difficult,
          data.date,
          data.description,
          data.status,
          data.lessons);
      }
    });
  }
}
