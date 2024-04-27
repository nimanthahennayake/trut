import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    children: [
      {
        path: 'my-profile',
        title: 'My Profile',
        loadComponent: () => import('./my-profile/my-profile.component').then(c => c.MyProfileComponent),
      },
      {
        path: 'security',
        title: 'Security',
        loadComponent: () => import('./security/security.component').then(c => c.SecurityComponent),
      },
      {
        path: 'notifications',
        title: 'Notifications',
        loadComponent: () => import('./notifications/notifications.component').then(c => c.NotificationsComponent),
      },
      {
        path: 'sessions',
        title: 'Sessions',
        loadComponent: () => import('./sessions/sessions.component').then(c => c.SessionsComponent),
      },
      {
        path: 'cookie',
        title: 'Cookie',
        loadComponent: () => import('./cookie/cookie.component').then(c => c.CookieComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-profile'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
