import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ISale} from '../models/ISale';
import {IAssumption} from './interfaces/assumption';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private readonly collectionPath = '/sales';

  constructor(private httpClient: HttpClient) {
  }

  private static generateId(length = 10): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += environment.characters.charAt(Math.floor(Math.random() *
        environment.characters.length));
      console.log(result);
    }
    return result;
  }

  getAllSales(): Observable<ISale[]> {
    return this.httpClient.get<ISale[]>(`${environment.localApiPath}${this.collectionPath}`);
  }

  addNewSale(sale: ISale): Observable<void> {
    sale.id = SalesService.generateId();
    return this.httpClient.post<void>(`${environment.localApiPath}${this.collectionPath}`, sale);
  }

  updateSale(sale: ISale): Observable<void> {
    return this.httpClient.put<void>(`${environment.localApiPath}${this.collectionPath}/${sale.id}`, sale);
  }

  deleteSale(saleId: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.localApiPath}${this.collectionPath}/${saleId}`);
  }

  getSalesAssumptionTypes(): IAssumption[] {
    return [
      {id: 0, name: 'Count between'},
      {id: 1, name: 'Sum between'}
    ];
  }

  getSalesBetweenDates(dateFrom: Date, dateTo: Date): Observable<ISale[]> {
    return this.getAllSales().pipe(
      map(sales => {
        return sales.filter(sale => {
          const date = new Date(sale.transactionDate);
          return date >= dateFrom && date <= dateTo;
        });
      })
    );
  }

  // todo move to customer service
  getUserWithId(id: string): Observable<any> {
    return this.httpClient.get(`${environment.localApiPath}/customers/${id}`);
  }

  // todo move to customer service
  getAllCustomers(): Observable<any> {
    console.log(`${environment.localApiPath}/customers`);
    return this.httpClient.get(`${environment.localApiPath}/customers`);
  }
}
