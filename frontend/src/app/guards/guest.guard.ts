import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthServiceManual } from '../services/authguard.service'

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private authService: AuthServiceManual, private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (await this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    }
    else return true;
  }
}
