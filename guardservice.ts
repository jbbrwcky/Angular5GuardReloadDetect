import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';'
import { Router } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {
  constructor(
    private router: Router
  ) { }
  
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Because a difference exists between navigating from page A to page B, and
    // reloading (the fragment is null in the latter), we can use this to make
    // something to happen.
    if (_.isNull(_.get(route, 'fragment'))) {
      // The user has reloaded the page here.
      doSomethingUponReload();
    }
    return true;
  }
}
