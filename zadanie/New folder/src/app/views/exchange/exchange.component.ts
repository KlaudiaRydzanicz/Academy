import {Component, Input, OnInit, Output} from '@angular/core';
import {Currency} from '../../models/interfaces/currency';
import {CurrencyService} from '../../services/currency.service';
import {Subject} from "rxjs";


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],

})
export class ExchangeComponent implements OnInit {
  @Input()
  currency: any;
  @Input()
  place!: string;
  selectedCountry: string = 'PLN';
  eventsSubject: Subject<void> = new Subject<void>();

  currencyResponse!: Currency;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.loadCurrency();
  }


  selectChangeHandler(event: any) {
    this.eventsSubject.asObservable();
    this.selectedCountry = event.target.value;
    this.loadCurrency();
  }

  loadCurrency(): void{
    this.currencyService.getCurrency(`${this.selectedCountry}`, ['USD', 'EUR', 'GBP', 'CAD', 'CHF'])
      .subscribe((currency) => {
      this.currencyResponse = currency;
        this.emitEventToChild();
    });
  }

  emitEventToChild() {
    this.eventsSubject.next();
  }
}
