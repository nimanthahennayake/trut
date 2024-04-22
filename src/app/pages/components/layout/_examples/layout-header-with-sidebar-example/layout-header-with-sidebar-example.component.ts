import { Component } from '@angular/core';
import { LayoutBodyComponent } from 'protrack/components';
import { LayoutComponent } from 'protrack/components';
import { LayoutHeaderComponent } from 'protrack/components';
import { LayoutSidebarComponent } from 'protrack/components';

@Component({
  selector: 'app-layout-header-with-sidebar-example',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent
  ],
  templateUrl: './layout-header-with-sidebar-example.component.html',
  styleUrl: './layout-header-with-sidebar-example.component.scss'
})
export class LayoutHeaderWithSidebarExampleComponent {

}
