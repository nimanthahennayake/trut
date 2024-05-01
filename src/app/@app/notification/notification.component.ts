// notification.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { TrutAlertModule } from 'protrack/components';

@Component({
  selector: 'app-notification.template',
  standalone: true,
  imports: [
    TrutAlertModule,
    MatIcon,
    MatRipple
  ],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  custom_action_state: boolean = false;

  constructor(
    private snackBarRef: MatSnackBarRef<NotificationComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    if (data.action_state) {
      this.custom_action_state = true;
    }
  }

  dismiss(): void {
    this.snackBarRef.dismiss(); // Call the close function passed from the NotificationService
  }
}
