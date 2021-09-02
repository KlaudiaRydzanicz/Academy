import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency} from '../models/interfaces/currency';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Rate} from '../models/interfaces/rate';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  Currency: any;

  constructor(private http: HttpClient) {
  }

  getCurrency(base: string, symbols: string[]): Observable<Currency> {
    return this.http.get<Currency>(`${environment.apiUrl}&base=${base}&symbols=${symbols.join(',')}`).pipe(
      map((currency: any) => {
        const ratesResponse: Rate[] = [];
        for (const countryCode of Object.keys(currency.rates)) {
          ratesResponse.push({
            base: countryCode,
            value: currency.rates[countryCode],
          });
        }
        console.log(ratesResponse);
        return {
          date: currency.date,
          rates: ratesResponse,
          base: base,
        };
      })
    );

  }
}
