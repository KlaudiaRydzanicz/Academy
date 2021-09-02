import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PortfolioListComponent} from './components/portfolio-list/portfolio-list.component';
import {PortfolioFormComponent} from './components/portfolio-form/portfolio-form.component';
import {StoreModule} from '@ngrx/store';
import {portfolioReducer} from './reducers/portfolio.reducer';
import {routerReducer} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    PortfolioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      portfolios: portfolioReducer,
      router: routerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
