import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    children: [
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./users/users.component').then(c => c.UsersComponent),
      },
      {
        path: 'user-roles-access',
        title: 'Company',
        loadComponent: () => import('./roleaccessmapping/roleaccessmapping.component').then(c => c.RoleaccessmappingComponent),
      },
      {
        path: 'user-roles',
        title: 'Facility',
        loadComponent: () => import('./userroles/userroles.component').then(c => c.UserrolesComponent),
      },
      {
        path: 'user-functions',
        title: 'Division',
        loadComponent: () => import('./userfunctions/userfunctions.component').then(c => c.UserfunctionsComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccessSettingsRoutingModule { }
