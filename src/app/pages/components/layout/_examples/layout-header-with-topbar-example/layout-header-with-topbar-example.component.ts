import { Component } from '@angular/core';
import { LayoutBodyComponent } from 'protrack/components';
import { LayoutComponent } from 'protrack/components';
import { LayoutHeaderComponent } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';
import { LayoutTopbarComponent } from 'protrack/components';
import { EmrAnnouncementModule } from 'protrack/components';

@Component({
  selector: 'app-layout-header-with-topbar-example',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutTopbarComponent,
    MatIcon,
    EmrAnnouncementModule
  ],
  templateUrl: './layout-header-with-topbar-example.component.html',
  styleUrl: './layout-header-with-topbar-example.component.scss'
})
export class LayoutHeaderWithTopbarExampleComponent {

}
