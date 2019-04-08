
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {User} from '../shared/user.model';

import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
  readonly API = 'http://192.168.100.5:8089';

    constructor(private http: HttpClient) {}
    registerUser(user: User) {
      console.log(user);
      const body: User = {
        UserName: user.UserName,
        Password: user.Password,
        Email: user.Email,
        FirstName: user.FirstName,
        LastName: user.LastName
      };
      const reqHeader = new HttpHeaders({'No-Auth': 'True'});
      return this.http.post(this.API + '/api/User/Register', body, { headers : reqHeader});
    }



    userAuthentication(userName: string , password: string) {
      const data = 'username=' + userName + '&password=' + password + '&grant_type=password';
      const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
      return this.http.post(this.API + '/token', data, {headers : reqHeader});
    }

    getUserClaims() {
        return  this.http.get(this.API + '/api/GetUserClaims');
       }
}
