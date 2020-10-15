import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

import { AuthService } from './services/auth.service'


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.user.pipe(
            take(1),
            map(user => {
                const isAuth = user.login;
                if (isAuth) {
                    return isAuth;
                }
                return this.router.createUrlTree(['/auth']);
            }));
    }
}
