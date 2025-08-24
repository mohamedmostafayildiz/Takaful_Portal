import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  isAurher:any
  constructor(private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAutherized =JSON.parse(localStorage.getItem("userType")!).roles.includes(route.data[0])
                      ||JSON.parse(localStorage.getItem("userType")!).roles.includes(route.data[1])
                      ||JSON.parse(localStorage.getItem("userType")!).roles.includes(route.data[2])
    if(!isAutherized){
      Swal.fire({
        icon: 'error',
        title: '403',
        text: 'You Are Not Allowed To Access That Details',
      })
      
    }
    return isAutherized
  }
  
}
