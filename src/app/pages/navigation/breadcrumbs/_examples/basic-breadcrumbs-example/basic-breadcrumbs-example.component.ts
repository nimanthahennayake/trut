import { Component } from '@angular/core';
import { TrutBreadcrumbsModule } from 'protrack/components';

@Component({
  selector: 'app-basic-breadcrumbs-example',
  standalone: true,
  imports: [
    TrutBreadcrumbsModule
  ],
  templateUrl: './basic-breadcrumbs-example.component.html',
  styleUrl: './basic-breadcrumbs-example.component.scss'
})
export class BasicBreadcrumbsExampleComponent {

}
