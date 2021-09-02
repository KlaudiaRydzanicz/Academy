import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CitiesComponent} from './cities/cities.component';
import {CityModifyComponent} from './city-modify/city-modify.component';

const routes: Routes = [
  {
  path: '', component: CitiesComponent
  },
  {
    path: 'add', component: CityModifyComponent
  },
  {
    path: 'modify/:id', component: CityModifyComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule {
}
