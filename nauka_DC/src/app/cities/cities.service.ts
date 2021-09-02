import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {City} from './models/classes/city';
import {City as CityInterface} from './models/interfaces/city';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) {
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(environment.apiURL).pipe(
      map(cities => cities.map(city => new City(city.id,
        city.location,
        city.name,
        city.description,
        city.url)))
    );
  }

  createCity(city: CityInterface): Observable<CityInterface> {
    return this.http.post<CityInterface>(environment.apiURL, city);
  }

  updateCity(cityId: string, city: CityInterface): Observable<CityInterface> {
    return this.http.put<CityInterface>(`${environment.apiURL}/${cityId}`, city);
  }

  getCity(cityId: string): Observable<City> {
    return this.http.get<City>(`${environment.apiURL}/${cityId}`).pipe(
      map(city => new City(city.id,
        city.location,
        city.name,
        city.description,
        city.url,
        )));
  }
}
