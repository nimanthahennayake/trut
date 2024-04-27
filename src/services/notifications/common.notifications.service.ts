// notification.service.ts
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { OutputDto } from '../../dtos/common.output.status.dtp';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }

  showApiNotification(output: OutputDto | undefined, custom_action?: (() => void)): void {
    if (output) {
      if (output.error) {
        this.showBasicNotification(`Oops! ${output?.message}, ${output?.error_message}`, output?.action, custom_action);
      } else {
        this.showBasicNotification(`${output?.message}`, output?.action, custom_action);
      }
    } else {
      this.showBasicNotification(`Api response output not found!`, '', custom_action);
    }
  }

  showBasicNotification(message: string, action: string, custom_action: (() => void) | undefined) {
    this._snackBar.open(message, action, {
      duration: <number>environment.notificationConfigs.duration,
      horizontalPosition: <MatSnackBarHorizontalPosition>environment.notificationConfigs.horizontal_position,
      verticalPosition: <MatSnackBarVerticalPosition>environment.notificationConfigs.vertical_position
    }).onAction().subscribe(() => {
      if (custom_action) {
        custom_action();
      }
    });
  }
}