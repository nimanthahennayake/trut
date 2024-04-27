// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const function_code = next.data?.['function_code'];

        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        } else if (function_code && !this.authService.hasFunction(function_code)) {
            this.router.navigate(['/unauthorized']);
            return false;
        }
        return true;
    }
}
