import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServisService } from '../sevices/servis.service';

@Injectable({
  providedIn: 'root'
})
export class OgrenciGuard implements CanActivate {
  constructor(private router: Router, private servis:ServisService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.servis.OgrenciByIdServis(sessionStorage.getItem("ogrUID")) !=null)
    {
      return true;
    }
    else{
      this.router.navigate(['/'])
      return false;
    }
  }
  
}
