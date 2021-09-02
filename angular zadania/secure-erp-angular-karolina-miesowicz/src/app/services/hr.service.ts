import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import Hr from '../models/classes/hr';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  hrUrl = `${environment.localApiUrl}/humanresources`;

  constructor(private httpClient: HttpClient) {
  }

  getAllHR(): Observable<Hr[]> {
    return this.httpClient.get<Hr[]>(this.hrUrl);
  }

  createNewHr(data: Hr): void {
    this.httpClient.post(this.hrUrl, data
    ).subscribe();
  }

  updateHr(id: string, data: Hr): void {
    this.httpClient.put(`${this.hrUrl}/${id}`,
      data
    ).subscribe();
  }

  deleteHr(id: string): void {
    this.httpClient.delete(`${this.hrUrl}/${id}`).subscribe();
  }
}
