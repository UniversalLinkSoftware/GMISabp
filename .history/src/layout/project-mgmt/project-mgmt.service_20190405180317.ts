import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projectmgmt } from './project-mgmt.model';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectmgmtService {
  public API = 'http://192.168.1.2:81/api/services/app/Project/GetAll';
  // public API2 = "http://192.168.1.2:81/api/services/app/Project/Create";
  // public PROJECTMGMT_API = `${this.API}/GetAll`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<Array<any>>(this.API);
  }

  get(id: number) {
    return this.http.get<any[]>(`${this.API}/${id}`);
  }
  save(projectForm: Projectmgmt): Observable<Projectmgmt> {
    let result: Observable<Projectmgmt>;
    if (projectForm) {
      result = this.http.put<Projectmgmt>(
        `${this.API}/${projectForm}`,
        projectForm
      );
    } else {
      result = this.http.post<Projectmgmt>(this.API, projectForm);
    }
    return result;
  }
}
