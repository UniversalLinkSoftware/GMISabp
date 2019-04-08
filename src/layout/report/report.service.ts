import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from './report.model';


@Injectable()
export class ReportService {
  public API = 'http://192.168.100.6:8089/api';
  public REPORT_API = `${this.API}/GroundwaterInfoes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Report>> {
    return this.http.get<Array<Report>>(this.REPORT_API);
  }

  get(id: number) {
    return this.http.get<Report>(`${this.REPORT_API}/${id}`);
  }

  save(groundwater: Report): Observable<Report> {
    let result: Observable<Report>;
    if (groundwater.id) {
      result = this.http.put<Report>(
        `${this.REPORT_API}/${groundwater.id}`,
        groundwater
      );
    } else {
      result = this.http.post<Report>(this.REPORT_API, groundwater);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.REPORT_API}/${id}`);
  }
}
