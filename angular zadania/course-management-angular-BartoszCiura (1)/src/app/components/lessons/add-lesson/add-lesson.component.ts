import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LessonService} from "../../../services/lesson.service";
import {Lesson} from "../../../models/lesson";
import {Course} from "../../../models/course";
import {CourseService} from "../../../services/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {



  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }
  lesson: Lesson = new Lesson();
  submitted = false;
  key = '';

  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    order: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    estimatedDuration: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = params.key;
    });
  }

  saveLesson(): void{
    this.lessonService.create(this.addForm.value, this.key).then(() => {
      alert('Lesson added!');
    });
  }

  newLesson(): void{
    this.submitted = false;
    this.lesson = new Lesson();
  }

}
