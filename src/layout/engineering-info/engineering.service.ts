

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiverHydology, BranchCanal, MainCanal } from './engineering-info.model';
import { MainTable } from './maintable.model';


@Injectable()
export class EngineeringService {
  public API = 'http://localhost:52544/api';
  public BRANCHCANAL_API = `${this.API}/Branchcanals`;
  public MAINCANAL_API = `${this.API}/Maincanals`;
  public MAINTABLE_API = `${this.API}/Maintables`;
  public RIVERHYDROLOGY_API = `${this.API}/Riverhydrologies`;

  constructor(private http: HttpClient) {}

  getAllBranchcanal(): Observable<Array<BranchCanal>> {
    return this.http.get<Array<BranchCanal>>(this.BRANCHCANAL_API);

  }
  getAllMaincanal(): Observable<Array<MainCanal>> {
    return this.http.get<Array<MainCanal>>(this.MAINCANAL_API);

  }
  getAllRiverhydrology(): Observable<Array<RiverHydology>> {
    return this.http.get<Array<RiverHydology>>(this.RIVERHYDROLOGY_API);

  }
  getAllMaintable(): Observable<Array<MainTable>> {
    return this.http.get<Array<MainTable>>(this.MAINTABLE_API);

  }

  get(id: string) {
    return this.http.get<RiverHydology>(`${this.RIVERHYDROLOGY_API}/${id}`);
  }

  save(riverhydrology: RiverHydology): Observable<RiverHydology> {
    let result: Observable<RiverHydology>;
    if (riverhydrology.id) {
      result = this.http.put<RiverHydology>(
        `${this.RIVERHYDROLOGY_API}/${riverhydrology.id}`,
        riverhydrology
      );
    } else {
      result = this.http.post<RiverHydology>(this.RIVERHYDROLOGY_API, riverhydrology);
    }
    return result;
  }


}
