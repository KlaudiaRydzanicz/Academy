import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CitiesService} from '../cities.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-city-modify',
  templateUrl: './city-modify.component.html',
  styleUrls: ['./city-modify.component.scss']
})
export class CityModifyComponent implements OnInit {
  private urlValidator = /(https:\/\/){1}((pl)|(en))\.wikipedia\.org(\/{1}.*)*/g;
  form: FormGroup;
  cityId: string | null;

  constructor(private citiesService: CitiesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cityId = this.route.snapshot.paramMap.get('id');
    this.form = new FormGroup({
      location: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      url: new FormControl('', [Validators.required, Validators.pattern(this.urlValidator)]),
    });
    this.checkIfModify();
  }

  checkIfModify(): void {
    if (this.cityId) {
      this.citiesService.getCity(this.cityId).subscribe(city => this.form.patchValue(city));
    }
  }

  modfiyCity(): void {
    this.cityId ?
      this.citiesService.updateCity(this.cityId, {...this.form.value}).subscribe()
      : this.citiesService.createCity({...this.form.value}).subscribe();
  }

  errorMessage(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].touched && this.form.controls[controlName]?.errors?.[errorName];
  }
}
