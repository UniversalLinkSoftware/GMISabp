import { OnInit, Injectable } from '@angular/core';
import { Location } from './location-info.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable()
export class LocationService {
 public API = 'http://localhost:8080/api';
 public LOCATION_API = `${this.API}/Locations`;

 constructor(private http: HttpClient) {}
 getAll(): Observable<Array<Location>> {
   return this.http.get<Array<Location>>(this.LOCATION_API);
 }

 get(id: string) {
   return this.http.get<Location>(`${this.LOCATION_API}/${id}`);
 }

 save(location: Location): Observable<Location> {
   let result: Observable<Location>;
   if (location.id) {
     result = this.http.put<Location>(
       `${this.LOCATION_API}/${location.id}`,
       location
     );
   } else {
     result = this.http.post<Location>(this.LOCATION_API, location);
   }
   return result;
 }

 remove(id: number) {
   return this.http.delete(`${this.LOCATION_API}/${id.toString()}`);
 }
}


