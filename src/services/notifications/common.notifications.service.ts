// notification.service.ts

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NotificationComponent } from '@app/notification/notification.component';
import { environment } from '../../environments/environment';
import { OutputDto } from '../../dtos/common.output.status.dtp';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }

  showApiNotification(output: OutputDto | undefined, custom_action?: (() => void)): void {
    if (output) {
      if (output.error) {
        this.showBasicNotification(output?.variant, output?.title, output?.message, `Oops! ${output?.error_message}`, output?.action, custom_action);
      } else {
        this.showBasicNotification(output?.variant, output?.title, output?.message, '', output?.action, custom_action);
      }
    } else {
      this.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', `Whoopsie! Looks like our api response output vanished, Let's try again`, '', '', custom_action);
    }
  }

  showBasicNotification(variant: string, title: string, message: string, error_message: string, action: string, custom_action: (() => void) | undefined) {
    const snackBarRef = this._snackBar.openFromComponent(NotificationComponent, {
      duration: environment.notificationConfigs.duration,
      horizontalPosition: <MatSnackBarHorizontalPosition>environment.notificationConfigs.horizontal_position,
      verticalPosition: <MatSnackBarVerticalPosition>environment.notificationConfigs.vertical_position,
      data: {
        variant,
        title,
        message,
        error_message,
        action,
        custom_action,
        close: () => {
          snackBarRef.dismiss(); // Dismiss the snackbar when close is called
        }
      }
    });
  }
}
