import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-upgrade-to-pro',
  exportAs: 'appSidebarUpgradeToPro',
  standalone: true,
  imports: [
    TrutAvatarModule,
    MatButton,
    MatIcon
  ],
  templateUrl: './upgrade-to-pro.component.html',
  styleUrl: './upgrade-to-pro.component.scss'
})
export class UpgradeToProComponent {

}
