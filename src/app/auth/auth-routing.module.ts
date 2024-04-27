import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../../environments/environment';
const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('./signin/signin.component').then(c => c.SigninComponent),
    data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent),
    data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.component').then(c => c.ForgotPasswordComponent),
    data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: 'password-reset',
    loadComponent: () => import('./password-reset/password-reset.component').then(c => c.PasswordResetComponent),
    data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: 'set-new-password',
    loadComponent: () => import('./set-new-password/set-new-password.component').then(c => c.SetNewPasswordComponent),
    data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: 'done',
    loadComponent: () => import('./done/done.component').then(c => c.DoneComponent),
    data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: 'create-account',
    loadComponent: () => import('./create-account/create-account.component').then(c => c.CreateAccountComponent),
    data: { function_code: environment.accessFunctionCodes.public }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
