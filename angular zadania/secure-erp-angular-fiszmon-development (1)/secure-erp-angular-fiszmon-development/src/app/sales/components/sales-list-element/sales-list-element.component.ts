import {Component, Input, OnInit} from '@angular/core';
import {ISale} from '../../../models/ISale';
import {SalesService} from '../../sales.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sales-list-element',
  templateUrl: './sales-list-element.component.html',
  styleUrls: ['./sales-list-element.component.scss']
})
export class SalesListElementComponent implements OnInit {
  @Input() sale: ISale;
  @Input() showName = false;
  customer$: Observable<any>;

  constructor(private salesService: SalesService) {
  }

  ngOnInit(): void {
    console.log(this.sale.customerId);
    if (this.sale.customerId) {
      this.customer$ = this.salesService.getUserWithId(this.sale.customerId);
    }
  }

}
