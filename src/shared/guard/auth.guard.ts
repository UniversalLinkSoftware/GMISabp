import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):  boolean {
          if (localStorage.getItem('userToken') != null) { return true; }
          this.router.navigate(['/login']);
          return false;
      }

    //  original code
    // canActivate() {
    //     if (localStorage.getItem('isLoggedin')) {
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }
}
