import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from "../../environments/environment";

const httpOptions={
  headers : new HttpHeaders({
    'Authorization': `${environment.pexelsKey}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class PexelPhotoService {

  constructor(private http:HttpClient) { }

  getData(country: string, perPage: number):Observable<any>{
    const url=`${environment.pexelsUrl}${country}&per_page=${perPage}`;
    return this.http.get<any>(url,httpOptions).pipe(catchError(this.handleError));
  }
  getCountryName(currencyCode: string): Observable<string>{
    return this.http.get<any>(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).pipe(
      map((response: any) => {
        const country: string = response.shift().name
        return country.split(" ")[0];
      })
    )
  }
  handleError(error: Error){
    return throwError(error.message || "Server Error");
  }
}
