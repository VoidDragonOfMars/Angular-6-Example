import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from
    '@angular/router';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TokenStorage} from './token.storage';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorage,
              private route: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (window.sessionStorage.getItem('token') !== null){
      return true;
    } else{
      this.route.navigate(['login']);
      return false;
    }
  }
}
