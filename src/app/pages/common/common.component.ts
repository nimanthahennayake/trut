import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from 'protrack/components';
import { LayoutBodyComponent } from 'protrack/components';
import { LayoutSidebarComponent } from 'protrack/components';
import { LayoutHeaderComponent } from 'protrack/components';
import { LayoutTopbarComponent } from 'protrack/components';
import { HeaderComponent } from '@app/header/header/header.component';
import { SidebarComponent } from '@app/sidebar/sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    LayoutBodyComponent,
    LayoutSidebarComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent
  ],
  templateUrl: './common.component.html'
})
export class CommonComponent {
}
