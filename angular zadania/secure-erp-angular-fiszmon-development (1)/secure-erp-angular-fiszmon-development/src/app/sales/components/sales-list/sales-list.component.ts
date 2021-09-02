import {Component, OnInit} from '@angular/core';
import {SalesService} from '../../sales.service';
import {ISale} from '../../../models/ISale';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {EditSaleModalComponent} from '../edit-sale-modal/edit-sale-modal.component';
import {ModalCloseStates} from '../../enums/ModalCloseStates';
import {IModalResponse} from '../../../models/IModalResponse';
import {SalesListElementComponent} from '../sales-list-element/sales-list-element.component';
import {AssumptionByComponent} from '../assumption-by/assumption-by.component';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  constructor(private salesService: SalesService, private modalService: BsModalService) {
  }
  sales: ISale[] = [];
  modalRef: BsModalRef;

  private static formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  ngOnInit(): void {
    this.getSales();
  }

  private getSales(): void {
    this.salesService.getAllSales().subscribe((sales) => {
      this.sales = sales;
    });
  }

  addOrEditSale(sale: ISale | null = null): void {
    this.modalRef = this.modalService.show(EditSaleModalComponent, {
      initialState: {sale}
    });
    this.modalRef.content.event.subscribe((resp) => this.updateSalesWith(resp));
  }

  updateSalesWith(resp: IModalResponse): void {
    switch (resp.state) {
      case ModalCloseStates.Update:
        this.salesService.updateSale(resp.data).subscribe(() => {
          this.getSales();
        });
        break;
      case ModalCloseStates.Create:
        this.salesService.addNewSale(resp.data).subscribe(() => {
          this.getSales();
        });
        break;
    }
  }

  deleteSale(id: string): void {
    this.salesService.deleteSale(id).subscribe(() => {
      this.getSales();
    });
  }

  displayBiggestTransactionRevenue(): void {
    const salesCopy = [...this.sales];
    const biggestTransaction = salesCopy.sort((sA, sB) => sB.price - sA.price).shift();
    this.modalRef = this.modalService.show(SalesListElementComponent, {
      initialState: {
        sale: biggestTransaction,
        showName: true
      }
    });
  }

  displayBiggestProductRevenue(): void {
    const salesProduct: { [index: string]: number } = {};
    for (const sale of this.sales) {
      if (!salesProduct.hasOwnProperty(sale.product)) {
        salesProduct[sale.product] = 0;
      }
      salesProduct[sale.product] += sale.price;
    }
    const keys = Object.keys(salesProduct);
    let biggestProductName = keys.shift();
    for (const name of keys) {
      if (salesProduct[name] > salesProduct[biggestProductName]) {
        biggestProductName = name;
      }
    }
    const biggestTransaction = {
      product: biggestProductName,
      transactionDate: SalesListComponent.formatDate(new Date()),
      price: salesProduct[biggestProductName]
    } as ISale;
    this.modalRef = this.modalService.show(SalesListElementComponent, {
      initialState: {
        sale: biggestTransaction,
        showName: true
      }
    });
  }

  openAssumption(): void {
    this.modalRef = this.modalService.show(AssumptionByComponent);
  }
}
