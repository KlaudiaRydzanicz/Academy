import {RouterModule, Routes} from '@angular/router';
import {SalesListComponent} from './components/sales-list/sales-list.component';
import {NgModule} from '@angular/core';
import {SalesListElementComponent} from './components/sales-list-element/sales-list-element.component';

const routes: Routes = [
  {
    path: '',
    component: SalesListComponent
  },
  {
    path: 'details/:id',
    component: SalesListElementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {
}
