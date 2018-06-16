import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceManual } from '../services/authguard.service';


@Injectable()
export class UserAuthenticationGuard implements CanActivate {
  constructor(private authService: AuthServiceManual, private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (!await this.authService.isLoggedIn()) {
      this.router.navigate(['/user-gate-way']);
      return false;
    }
    else return true;
  }
}
