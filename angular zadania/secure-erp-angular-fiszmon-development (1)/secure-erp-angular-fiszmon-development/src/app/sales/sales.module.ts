import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesListComponent} from './components/sales-list/sales-list.component';
import {SalesListElementComponent} from './components/sales-list-element/sales-list-element.component';
import {HttpClientModule} from '@angular/common/http';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import {EditSaleModalComponent} from './components/edit-sale-modal/edit-sale-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AssumptionByComponent } from './components/assumption-by/assumption-by.component';

@NgModule({
  declarations: [
    SalesListComponent,
    SalesListElementComponent,
    EditSaleModalComponent,
    AssumptionByComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
})
export class SalesModule {
}
