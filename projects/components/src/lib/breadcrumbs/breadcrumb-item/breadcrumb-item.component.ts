import { Component } from '@angular/core';

@Component({
  selector: 'trut-breadcrumb-item,[trut-breadcrumb-item]',
  exportAs: 'emrBreadcrumbItem',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css'],
  host: {
    class: 'trut-breadcrumb-item'
  }
})
export class BreadcrumbItemComponent {
}
