import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Agriculture} from '../../layout/agriculture-info/agriculture-info.model';

@Injectable()
export class DoiService {
  public API = 'http://localhost:10576/api';
  public DOI_API = `${this.API}/Agricultures`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Agriculture>> {
    return this.http.get<Array<Agriculture>>(this.DOI_API);
  }

  get(id: string) {
    return this.http.get<Agriculture>(`${this.DOI_API}/${id}`);
  }

  save(agriculture: Agriculture): Observable<Agriculture> {
    let result: Observable<Agriculture>;
    if (agriculture.id) {
      result = this.http.put<Agriculture>(
        `${this.DOI_API}/${agriculture.id}`,
        agriculture
      );
    } else {
      result = this.http.post<Agriculture>(this.DOI_API, agriculture);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.DOI_API}/${id.toString()}`);
  }
}
