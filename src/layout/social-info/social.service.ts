
// import { Social } from './social-info.model';
// import { OnInit, Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// @Injectable()
// export class SocialService implements OnInit {


//     // tslint:disable-next-line:member-ordering
//     private socialInfo: Social;

//     socialChanged = new Subject<Social>();
//     ngOnInit() {}
//     addSocial(social: Social) {
//         console.log(social);
//         this.socialInfo = social;

//       }

//       getSocialInfo() {
//         console.log(this.socialInfo);
//           return this.socialInfo;
//       }


//       setSocial(social: Social) {
//             this.socialInfo = social;
//             console.log(this.socialInfo);
//             this.socialChanged.next( this.socialInfo);
//       }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Social } from './social-info.model';
import { LandTenure } from './landtenure.model';
import { Farmsize } from './farmsize.model';
import { EthnicGroups } from './ethnicgroups.model';

@Injectable()
export class SocialService {
  public API = 'http://localhost:4173/api';
  public SOCIAL_API = `${this.API}/Socials`;
  public LAND_API = `${this.API}/landtenures`;
  public FARM_API = `${this.API}/farmsizes`;
  public ETHNIC_API = `${this.API}/ethnicgroups`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Social>> {
    return this.http.get<Array<Social>>(this.SOCIAL_API);
  }
  getAllLand(): Observable<Array<LandTenure>> {
    return this.http.get<Array<LandTenure>>(this.LAND_API);
  }
  getAllFarm(): Observable<Array<Farmsize>> {
    return this.http.get<Array<Farmsize>>(this.FARM_API);
  }
  getAllEthnic(): Observable<Array<EthnicGroups>> {
    return this.http.get<Array<EthnicGroups>>(this.ETHNIC_API);
  }

  get(id: number) {
    return this.http.get<Social>(`${this.SOCIAL_API}/${id}`);
  }

  save(social: Social): Observable<Social> {
    let result: Observable<Social>;
    if (social.id) {
      result = this.http.put<Social>(
        `${this.SOCIAL_API}/${social.id}`,
        social
      );
    } else {
      result = this.http.post<Social>(this.SOCIAL_API, social);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.SOCIAL_API}/${id.toString()}`);
  }
}
