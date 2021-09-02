import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './components/hr/hr.component';
import { EditHrComponent } from './components/edit-hr/edit-hr.component';
import { AddHrComponent } from './components/add-hr/add-hr.component';


@NgModule({
  declarations: [HrComponent, EditHrComponent, AddHrComponent],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
