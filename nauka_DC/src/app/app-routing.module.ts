import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {path: 'cities',
  loadChildren: () => import('./cities/cities-routing.module').then(m => m.CitiesRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
