import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrutDividerModule } from 'protrack/components';
import { AuthService } from '../../../services/auth/auth.service';
import { NotificationService } from '../../../services/notifications/common.notifications.service';
import { SignUpUserDto, SignedUpUserDto } from '../../../dtos/user.signup.dto';

@Component({
  selector: 'app-signup',
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
    TrutDividerModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  form: FormGroup;

  constructor(private _authService: AuthService, private _notificationService: NotificationService) {
    this.form = new FormGroup({
      user_name: new FormControl('', Validators.required),
      user_email: new FormControl('', [Validators.required, Validators.email]),
      user_password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this._authService.handleAuthInit();
  }

  async signUp() {
    try {
      if (this.form.valid) {
        const hashedPassword = await this._authService.encryptPassword(this.form.value.user_password);
        const signUpUserDto: SignUpUserDto = {
          user_name: this.form.value.user_name,
          user_email: this.form.value.user_email,
          user_password: hashedPassword
        };
        await this._authService.register(signUpUserDto);
      } else {
        this._notificationService.showBasicNotification('Please fill out all required fields correctly', '', undefined);
      }
    } catch (error: any) {
      this._notificationService.showBasicNotification(`Something went wrong, please try again. ${error?.message}`, '', undefined);
    }
  }
}