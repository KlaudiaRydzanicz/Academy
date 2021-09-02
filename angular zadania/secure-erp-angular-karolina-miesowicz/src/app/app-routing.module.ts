import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HrComponent} from './components/hr/hr.component';

const routes: Routes = [
  {path: '', component: HrComponent},
  {path: 'humanresources', component: HrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
