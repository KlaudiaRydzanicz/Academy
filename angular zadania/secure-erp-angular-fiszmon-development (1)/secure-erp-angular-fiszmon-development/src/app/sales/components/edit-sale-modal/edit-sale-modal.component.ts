import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {ISale} from '../../../models/ISale';
import {ModalCloseStates} from '../../enums/ModalCloseStates';
import {IModalResponse} from '../../../models/IModalResponse';
import {Observable} from 'rxjs';
import {SalesService} from '../../sales.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-edit-sale-modal',
  templateUrl: './edit-sale-modal.component.html',
  styleUrls: ['./edit-sale-modal.component.scss']
})
export class EditSaleModalComponent implements OnInit {
  sale: ISale | null;
  title = 'New sale';
  customers: { id: string, name: string }[];
  event: EventEmitter<IModalResponse> = new EventEmitter();
  form: FormGroup = new FormGroup(
    {
      product: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      customerId: new FormControl('', [Validators.required]),
      transactionDate: new FormControl(null, [Validators.required])
    }
  );

  constructor(public bsModalRef: BsModalRef, private salesService: SalesService) {
  }

  private availableCustomers(): Observable<{ id: string; name: string }[]> {
    return this.salesService.getAllCustomers().pipe(
      map(
        (customers) => customers.map(customer => {
          return {id: customer.id, name: customer.name};
        }))
    );
  }

  ngOnInit(): void {
    this.availableCustomers().subscribe((customers) => {
      this.customers = customers;
    });
    if (this.sale) {
      this.title = 'Edit sale';
      this.form.patchValue(this.sale);
    }
  }

  save(): void {
    this.event.emit({
      data: {
        ...this.sale,
        ...this.form.value
      } as ISale,
      state: this.sale ? ModalCloseStates.Update : ModalCloseStates.Create
    });
    this.bsModalRef.hide();
  }

  close(): void {
    this.event.emit({state: ModalCloseStates.Rejected});
    this.bsModalRef.hide();
  }
}
