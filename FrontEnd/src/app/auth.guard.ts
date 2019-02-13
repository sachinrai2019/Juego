import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor( private auth:AuthService,private _route:Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
console.log('abc');

  if(this.auth.loggedIn()){
    console.log('yes');
    return true
     
  }
  else{
 console.log('no');
 this._route.navigate(['/login']);
 stop();
 return false;

  }

//return true;
  }
}
