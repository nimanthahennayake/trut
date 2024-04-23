import { Component } from '@angular/core';
import { TrutBreadcrumbsModule } from 'protrack/components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs-with-datasource-example',
  standalone: true,
  imports: [
    TrutBreadcrumbsModule,
    RouterLink
  ],
  templateUrl: './breadcrumbs-with-datasource-example.component.html',
  styleUrl: './breadcrumbs-with-datasource-example.component.scss'
})
export class BreadcrumbsWithDatasourceExampleComponent {
  dataSource = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Breadcrumbs'
    }
  ];
}
