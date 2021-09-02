import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/course';
import {CourseService} from '../../services/course.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  statuses = Course.statuses();
  difficult = Course.difficulties();
  course: Course = new Course();
  submitted = false;

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    difficult: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }
  saveCourse(): void{
    this.courseService.create(this.addForm.value).then(() => {
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.course = new Course();
  }

}
