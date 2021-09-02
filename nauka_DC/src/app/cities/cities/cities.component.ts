import {Component, OnInit} from '@angular/core';
import {City} from '../models/classes/city';
import {CitiesService} from '../cities.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CityDetailsComponent} from '../city-details/city-details.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: City[];

  constructor(private citiesService: CitiesService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.citiesService.getCities().subscribe((cities: City[]) => {
      this.cities = cities;
    });
  }

  editCity(cityId: string): void {
    this.router.navigateByUrl(`/cities/modify/${cityId}`).catch(console.error);
  }

  open(city: City): void {
    const modalRef = this.modalService.open(CityDetailsComponent);
    modalRef.componentInstance.city = city;
  }
}
