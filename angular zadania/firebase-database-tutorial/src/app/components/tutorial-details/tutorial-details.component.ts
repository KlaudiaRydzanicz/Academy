import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import Tutorial from '../../models/tutorial';
import {TutorialService} from '../../services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit, OnChanges {

  @Input() tutorial: Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Tutorial = null;
  message = '';

  constructor(private tutorialService: TutorialService) {
  }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = {...this.tutorial};
  }

  updatePublished(status): void {
    this.tutorialService.update(this.currentTutorial.key, {published: status})
      .then(() => {
        this.currentTutorial.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
  }

  updateTutorial(): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description
    };

    this.tutorialService.update(this.currentTutorial.key, data)
      .then(() =>
        this.message = 'The tutorial was updated successcully!'
      )
      .catch(err => console.log(err));
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.key)
      .then(() => {
        this.refreshList.emit();
        this.message = 'The tutorial was deleted successfully!';
      })
      .catch(err => console.log(err));
  }
}
