import { Agriculture } from './agriculture-info.model';
import { OnInit, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable()
export class AgricultureService {
 public API = 'http://localhost:8080/api';
 public AGRICULTURE_API = `${this.API}/Agricultures`;

 constructor(private http: HttpClient) {}
 getAll(): Observable<Array<Agriculture>> {
   return this.http.get<Array<Agriculture>>(this.AGRICULTURE_API);
 }

 get(id: string) {
   return this.http.get<Agriculture>(`${this.AGRICULTURE_API}/${id}`);
 }

 save(agriculture: Agriculture): Observable<Agriculture> {
   let result: Observable<Agriculture>;
   if (agriculture .id) {
     result = this.http.put<Agriculture>(
       `${this.AGRICULTURE_API}/${agriculture .id}`,
       agriculture
     );
   } else {
     result = this.http.post<Agriculture>(this.AGRICULTURE_API, agriculture );
   }
   return result;
 }

 remove(id: number) {
   return this.http.delete(`${this.AGRICULTURE_API}/${id.toString()}`);
 }
}
