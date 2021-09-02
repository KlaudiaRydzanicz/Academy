import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ExchangeComponent } from './views/exchange/exchange.component';
import { GraphComponent } from './views/graph/graph.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExchangeComponent,
    GraphComponent,
    HeaderComponent,
    CarouselComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
