import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CounterService} from "./counter.service";

@NgModule({
  declarations: [
    AppComponent,
    InactiveUsersComponent,
    ActiveUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
