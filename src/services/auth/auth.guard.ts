// // auth.guard.ts
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from './auth.service';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     const expectedRole = next.data.expectedRole;

//     if (!this.authService.isLoggedIn() || !this.authService.hasRole(expectedRole)) {
//       // User is not logged in or does not have the required role, redirect to login or unauthorized page
//       this.router.navigate(['/login']); // or this.router.navigate(['/unauthorized']);
//       return false;
//     }
//     return true;
//   }
// }
