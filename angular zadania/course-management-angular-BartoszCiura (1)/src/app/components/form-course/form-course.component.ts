import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss']
})
export class FormCourseComponent implements OnInit {

  @Output() refreshList: EventEmitter<any> = new EventEmitter();
currentCourse: Course = null;
  submitted = false;
  message = '';
  key = '';
  statuses: [number, string][] = [...Course.statuses()];
  difficulties: [number, string][] = [...Course.difficulties()];


  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    difficult: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.key = params.key);
    if(!this.key){
      this.message = 'Add course';
      return;
    }
    CourseService.getCourse(this.key).then((snapshot) => {
      if (snapshot.exists()) {
        this.message = 'Edit course';
        const data = snapshot.val();
        console.log(data);
        this.currentCourse = new Course
        (this.key,
          data.name,
          data.category,
          data.difficult,
          data.date,
          data.description,
          data.status,
          data.lessons);
        this.addForm.patchValue(this.currentCourse);
      }
    });
  }
  ngOnChanges(): void {
  }

  saveOrEditCourse(): void{
    if (this.key){
      this.courseService.update(this.key, this.addForm.value)
        .then(() =>
        alert('Item was updated!')
          ).catch(err => console.error(err));
    } else {
      this.courseService.create(this.addForm.value).then(() => {
        alert('Created new item!');
        this.submitted = true;
      });
    }
  }

  newTutorial(): void {
    this.submitted = false;
  }

}
