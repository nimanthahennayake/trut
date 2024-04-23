import { Component } from '@angular/core';
import { LayoutBodyComponent } from 'protrack/components';
import { LayoutComponent } from 'protrack/components';
import { LayoutHeaderComponent } from 'protrack/components';
import { LayoutSidebarComponent } from 'protrack/components';
import { LayoutFooterComponent } from 'protrack/components';
import { LayoutTopbarComponent } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';
import { TrutAnnouncementModule } from 'protrack/components';

@Component({
  selector: 'app-layout-with-nested-layouts-example',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutFooterComponent,
    LayoutTopbarComponent,
    MatIcon,
    TrutAnnouncementModule
  ],
  templateUrl: './layout-with-nested-layouts-example.component.html',
  styleUrl: './layout-with-nested-layouts-example.component.scss'
})
export class LayoutWithNestedLayoutsExampleComponent {

}
