import {Component, Input, OnInit} from '@angular/core';
import {PexelPhotoService} from "../../services/pexel-photo.service";
import {Currency} from "../../models/interfaces/currency";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private eventsSubscription!: Subscription;
  @Input()
  events!: Observable<void>;
  @Input()
  currency!: Currency;
  photo!: string;


  constructor(private pexelPhotoService: PexelPhotoService) {
  }

  ngOnInit(): void {
    this.getPictures();
    this.eventsSubscription = this.events.subscribe(() => this.getPictures());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  getPictures() {
    console.log(this.currency.base)
    this.pexelPhotoService.getCountryName(this.currency.base).subscribe((response: string) => {
      console.log(response, 'karuzela');
      this.pexelPhotoService.getData(response, 1).subscribe((response: any)=> {
        console.log(response)
        this.photo = response.photos.shift().src.landscape;
        return this.photo;
      })
    }, (error => {
      console.log(error);
    }))
  }
}
