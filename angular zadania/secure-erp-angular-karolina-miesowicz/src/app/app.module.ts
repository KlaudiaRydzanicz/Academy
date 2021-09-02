import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrComponent } from './components/hr/hr.component';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddHrComponent } from './components/add-hr/add-hr.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditHrComponent } from './components/edit-hr/edit-hr.component';

@NgModule({
  declarations: [
    AppComponent,
    HrComponent,
    AddHrComponent,
    EditHrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
