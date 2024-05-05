import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '@shared/_services/auth/auth.service';
import { NotificationService } from '@shared/_services/notifications/common.notifications.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatSuffix,
    MatError,
    RouterLink,
    ReactiveFormsModule,
    MatIcon
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  form: FormGroup;

  constructor(private _authService: AuthService, private _router: Router, private _notificationService: NotificationService) {
    this.form = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email])
    });
  }

  async sendVerificationCode() {
    try {
      if (this.form.valid) {
        const userEmail: string = this.form.value?.userEmail;
        const response: boolean | undefined = await this._authService.resetPassword(userEmail);
      } else {
        this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Please fill out email correctly', '', '', undefined);
      }
    } catch (error: any) {
      this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', `Something went wrong, please try again`, error?.message, '', undefined);
    }
  }
}
