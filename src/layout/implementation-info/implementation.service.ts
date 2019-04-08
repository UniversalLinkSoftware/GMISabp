
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Implementation } from './implementation-info.model';
import { ImpTable } from './table.model';


@Injectable()
export class ImplementationService {
  public API = 'http://localhost:26468/api';
  public IMPLEMENTATION_API = `${this.API}/Implementations`;
  public IMPTABLE_API = `${this.API}/imptables`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Implementation>> {
    return this.http.get<Array<Implementation>>(this.IMPLEMENTATION_API);

  }
  getAllimpTable(): Observable<Array<ImpTable>> {
    return this.http.get<Array<ImpTable>>(this.IMPTABLE_API);

  }

  get(id: string) {
    return this.http.get<Implementation>(`${this.IMPLEMENTATION_API}/${id}`);
  }

  save(implementation: Implementation): Observable<Implementation> {
    let result: Observable<Implementation>;
    if (implementation.id) {
      result = this.http.put<Implementation>(
        `${this.IMPLEMENTATION_API}/${implementation.id}`,
        implementation
      );
    } else {
      result = this.http.post<Implementation>(this.IMPLEMENTATION_API, implementation);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.IMPLEMENTATION_API}/${id.toString()}`);
  }
}
