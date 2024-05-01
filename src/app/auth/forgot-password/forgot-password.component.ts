import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../../../services/auth/auth.service';
import { NotificationService } from '../../../services/notifications/common.notifications.service';
import { environment } from '../../../environments/environment';

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
      user_email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  async sendVerificationCode() {
    try {
      if (this.form.valid) {
        const user_email: string = this.form.value?.user_email;
        const response: boolean | undefined = await this._authService.resetPassword(user_email);
      } else {
        this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Please fill out email correctly', '', '', undefined);
      }
    } catch (error: any) {
      this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', `Something went wrong, please try again`, error?.message, '', undefined);
    }
  }
}
