import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ExchangeComponent} from './views/exchange/exchange.component';
import { GraphComponent } from './views/graph/graph.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'exchange', component: ExchangeComponent},
  {path: 'graph', component: GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
