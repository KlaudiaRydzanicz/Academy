import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {City} from '../models/classes/city';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent {

  @Input() city: City;

  constructor(private activeModal: NgbActiveModal) {
  }

  close(): void {
    this.activeModal.close();
  }
}
