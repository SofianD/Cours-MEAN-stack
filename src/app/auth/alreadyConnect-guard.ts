import { Injectable } from '@angular/core';
import {  CanActivate,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          UrlTree,
          Router
        } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotConnectedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuth = this.authService.getIsAuth();
      if (isAuth) {
        this.router.navigate(['/']);
      }
      return true;
  }

}
