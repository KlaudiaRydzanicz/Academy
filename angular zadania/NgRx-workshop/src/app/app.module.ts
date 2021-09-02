import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioFormComponent } from './components/portfolio-form/portfolio-form.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {portfolioReducer} from './reducers/portfolio.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    PortfolioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({portfolios: portfolioReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
