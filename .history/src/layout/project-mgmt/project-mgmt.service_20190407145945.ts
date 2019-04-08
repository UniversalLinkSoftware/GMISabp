import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projectmgmt } from './project-mgmt.model';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppComponent } from '@app/app.component';
import { AppConsts } from '@shared/AppConsts';


@Injectable({
  providedIn: 'root'
})
export class ProjectmgmtService {
  // public API = 'http://192.168.1.2:81/api/services/app/Project/GetAll';
  // public API2 = "http://192.168.1.2:81/api/services/app/Project/Create";

  baseurl:string="";

  constructor(private http: HttpClient) {
    this.baseurl=AppConsts.remoteServiceBaseUrl+"/api/services/app/Project/";
  }

  getAll(): Observable<any[]> {
    console.log(this.baseurl);
    return this.http.get<Array<any>>(this.baseurl+"GetAll");
  }

  // get(id: number) {
  //   return this.http.get<any[]>(`${this.API}/${id}`);
  // }
  save(Projectmgmt: Projectmgmt): Observable<Projectmgmt> {
    let result: Observable<Projectmgmt>;
    if (Projectmgmt) {
      result = this.http.put<Projectmgmt>(
        `${this.baseurl+"Create"}/${Projectmgmt}`,
        Projectmgmt
      );
    } else {
      result = this.http.post<Projectmgmt>(this.baseurl+"Create", Projectmgmt);
    }
    return result;
  }
}
