import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    const role: string = next.data.expectedRole;

    return this.checkLogin(url, role);
  }

  checkLogin(url: string, role): boolean {
    var isRole = role == localStorage.getItem('Role');
    if (JSON.parse(localStorage.getItem('LoggedIn'))) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/signin']);

    return false;
  }

}
