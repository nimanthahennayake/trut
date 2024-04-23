import { Component } from '@angular/core';
import { TrutDividerModule } from 'protrack/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    TrutDividerModule,
    MatButton,
    MatIcon,
    MatSlideToggle
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
