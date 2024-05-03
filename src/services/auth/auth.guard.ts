import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const functionCode = next.data?.['functionCode'];
        return of(true); //Nimanthah dev

        return from(this._authService.isLoggedIn()).pipe(
            switchMap((isLoggedIn) => {
                if (isLoggedIn) {
                    if (!functionCode || functionCode === environment.accessFunctionCodes.public) {
                        return of(true);
                    } else {
                        return from(this._authService.hasFunction(functionCode)).pipe(
                            map((hasFunction) => {
                                if (hasFunction) {
                                    return true;
                                } else {
                                    this._router.navigate([environment.defaultPaths.accessDenied]);
                                    return false;
                                }
                            }),
                            catchError((error) => {
                                console.error('Error checking authentication status:', error);
                                this._router.navigate([environment.defaultPaths.auth]);
                                return of(false);
                            })
                        );
                    }
                } else {
                    this._router.navigate([environment.defaultPaths.auth]);
                    return of(false);
                }
            }),
            catchError((error) => {
                console.error('Error checking authentication status:', error);
                this._router.navigate([environment.defaultPaths.auth]);
                return of(false);
            })
        );
    }
}
