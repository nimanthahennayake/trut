import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    children: [
      {
        path: 'country',
        title: 'Country',
        loadComponent: () => import('./country/country.component').then(c => c.CountryComponent),
      },
      {
        path: 'company',
        title: 'Company',
        loadComponent: () => import('./company/company.component').then(c => c.CompanyComponent),
      },
      {
        path: 'facility',
        title: 'Facility',
        loadComponent: () => import('./facility/facility.component').then(c => c.FacilityComponent),
      },
      {
        path: 'division',
        title: 'Division',
        loadComponent: () => import('./division/division.component').then(c => c.DivisionComponent),
      },
      {
        path: 'department',
        title: 'Department',
        loadComponent: () => import('./department/department.component').then(c => c.DepartmentComponent),
      },
      {
        path: 'settings',
        pathMatch: 'full',
        redirectTo: 'general/country'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralSettingsRoutingModule { }
