import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CitiesComponent} from './cities/cities.component';
import {CityModifyComponent} from './city-modify/city-modify.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CitiesRoutingModule} from './cities-routing.module';
import { CityNavComponent } from './city-nav/city-nav.component';
import { CityDetailsComponent } from './city-details/city-details.component';


@NgModule({
  declarations: [
    CitiesComponent,
    CityModifyComponent,
    CityNavComponent,
    CityDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CitiesRoutingModule
  ],
})
export class CitiesModule {
}
