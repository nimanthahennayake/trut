import { Component } from '@angular/core';
import { LayoutBodyComponent } from 'protrack/components';
import { LayoutComponent } from 'protrack/components';
import { LayoutFooterComponent } from 'protrack/components';
import { LayoutHeaderComponent } from 'protrack/components';

@Component({
  selector: 'app-layout-header-with-footer-example',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent
  ],
  templateUrl: './layout-header-with-footer-example.component.html',
  styleUrl: './layout-header-with-footer-example.component.scss'
})
export class LayoutHeaderWithFooterExampleComponent {

}
