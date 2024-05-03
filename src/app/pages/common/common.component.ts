import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from 'trut/components';
import { LayoutBodyComponent } from 'trut/components';
import { LayoutSidebarComponent } from 'trut/components';
import { LayoutHeaderComponent } from 'trut/components';
import { LayoutTopbarComponent } from 'trut/components';
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
