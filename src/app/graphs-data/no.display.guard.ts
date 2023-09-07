// no-display.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoDisplayGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if the route was activated by clicking the button
    const activatedByButton = sessionStorage.getItem('activatedByButton');
    if (activatedByButton) {
      sessionStorage.removeItem('activatedByButton'); // Remove the flag
      return true;
    } else {
      return false; // Prevent activation if not accessed by the button
    }
  }
}
