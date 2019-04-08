import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groundwater } from './groundwater-info.model';


@Injectable()
export class GroundwaterService {
  public API = 'http://192.168.100.6:8089/api';
  public GROUNDWATER_API = `${this.API}/GroundwaterInfoes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Groundwater>> {
    return this.http.get<Array<Groundwater>>(this.GROUNDWATER_API);
  }

  get(id: number) {
    return this.http.get<Groundwater>(`${this.GROUNDWATER_API}/${id}`);
  }

  save(groundwater: Groundwater): Observable<Groundwater> {
    let result: Observable<Groundwater>;
    if (groundwater.id) {
      result = this.http.put<Groundwater>(
        `${this.GROUNDWATER_API}/${groundwater.id}`,
        groundwater
      );
    } else {
      result = this.http.post<Groundwater>(this.GROUNDWATER_API, groundwater);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.GROUNDWATER_API}/${id}`);
  }
}
