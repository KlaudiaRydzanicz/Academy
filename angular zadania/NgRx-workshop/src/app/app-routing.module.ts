import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioListComponent} from './components/portfolio-list/portfolio-list.component';

const routes: Routes = [
  {path: '', component: PortfolioListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
