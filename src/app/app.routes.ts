import { Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard], data: { function_code: environment.accessFunctionCodes.pages }
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard], data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule),
    canActivate: [AuthGuard], data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () => import('./error/not-found/not-found.component').then(c => c.NotFoundComponent),
    canActivate: [AuthGuard], data: { function_code: environment.accessFunctionCodes.public }
  }
];
