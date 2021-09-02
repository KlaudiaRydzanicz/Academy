import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../models/course';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute} from '@angular/router';
import {AngularFireList, AngularFireObject} from "@angular/fire/database";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  @Input() course: Course;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  constructor(private courseService: CourseService, private route: ActivatedRoute) {

  }

  key = '';
  display = false;
  currentCourse: any = null;

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
  }

  ngOnChanges(): void {
    this.currentCourse = this.course;
    console.log(this.currentCourse);
  }

  displayEdit() {
    this.display = true;
  }
}
