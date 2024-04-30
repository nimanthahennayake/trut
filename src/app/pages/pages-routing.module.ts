import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    children: [
      {
        path: 'account/settings',
        loadChildren: () => import('./account/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'settings/general',
        loadChildren: () => import('./settings/general/general.settings.module').then(m => m.GeneralSettingsModule)
      },
      {
        path: 'settings/useraccess',
        loadChildren: () => import('./settings/useraccess/useraccess.settings.module').then(m => m.UserAccessSettingsModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account/settings'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
