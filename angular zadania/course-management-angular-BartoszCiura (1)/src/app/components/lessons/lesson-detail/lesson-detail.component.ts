import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lesson} from "../../../models/lesson";
import {LessonService} from "../../../services/lesson.service";
import {ActivatedRoute, Router} from "@angular/router";
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  @Input() lesson: Lesson;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentLesson: Lesson;
  message = '';
  key = '';
  isLesson = false;
  constructor(private lessonService: LessonService, private route: ActivatedRoute,
              private ngxBootstrapConfirmService: NgxBootstrapConfirmService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = params.key;
    });
    this.message = '';
    console.log(this.currentLesson);
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentLesson = {...this.lesson};
  }

  updateLesson(): void {
    this.isLesson = !this.isLesson;
    const data = {
      title: this.currentLesson.title,
      description: this.currentLesson.description,
      order: this.currentLesson.order,
      url: this.currentLesson.url,
      estimatedDuration: this.currentLesson.estimatedDuration,
    };

    this.lessonService.update(this.key, this.currentLesson.key, data)
      .then(() =>
console.log(data)
  )
      .catch(err => console.log(err));
  }

  deleteLesson(): void{
    this.lessonService.delete(this.key, this.currentLesson.key)
      .then(() => {
        this.refreshList.emit();
      })
      .catch(err => console.error(err));
  }

  action(): void {
    const options = {
      title: 'Sure you want to delete this lesson?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    };
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        this.deleteLesson();
        this.isLesson = false;
      }
    });
  }
}

