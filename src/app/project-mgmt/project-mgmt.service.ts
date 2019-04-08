import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projectmgmt } from './project-mgmt.model';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectmgmtService {
  public API = 'http://192.168.100.9:8088/api/Project';
  public PROJECTMGMT_API = `${this.API}/GetAllProjects`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<Array<any>>(this.PROJECTMGMT_API);
  }

  get(id: number) {
    return this.http.get<any[]>(`${this.PROJECTMGMT_API}/${id}`);
  }
}
