import { OnInit, Injectable } from '@angular/core';
import { Economic } from './economic-info.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable()
export class EconomicService {
 public API = 'http://localhost:8080/api';
 public ECONOMIC_API = `${this.API}/Economics`;

 constructor(private http: HttpClient) {}
 getAll(): Observable<Array<Economic>> {
   return this.http.get<Array<Economic>>(this.ECONOMIC_API);
 }

 get(id: string) {
   return this.http.get<Economic>(`${this.ECONOMIC_API}/${id}`);
 }

 save(economic: Economic): Observable<Economic> {
   let result: Observable<Economic>;
   if (economic.id) {
     result = this.http.put<Economic>(
       `${this.ECONOMIC_API}/${economic.id}`,
       economic
     );
   } else {
     result = this.http.post<Economic>(this.ECONOMIC_API, economic);
   }
   return result;
 }

 remove(id: number) {
   return this.http.delete(`${this.ECONOMIC_API}/${id.toString()}`);
 }
}


// import { OnInit, Injectable } from '@angular/core';
// import { Economic } from './economic-info.model';
// import { Subject } from 'rxjs';
// @Injectable()
// export class EconomicService implements OnInit {


//     ngOnInit() {}


//     // tslint:disable-next-line:member-ordering
//     private economicInfo: Economic;

//     addEconomic(economic: Economic) {
//         console.log(economic);
//         this.economicInfo = economic;
//       }

//       geteconomicInfo() {
//           return this.economicInfo;
//       }
//     }
