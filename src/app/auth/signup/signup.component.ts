import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrutDividerModule } from 'trut/components';
import { AuthService } from '../../../services/auth/auth.service';
import { NotificationService } from '../../../services/notifications/common.notifications.service';
import { SignUpUserDto } from '../../../dtos/user.signup.dto';
import { environment } from '../../../environments/environment';
import { PasswordStrengthModule } from 'trut/components';

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
    TrutDividerModule,
    PasswordStrengthModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  form: FormGroup<{ userName: any; userEmail: any; userPassword: any; }>;

  constructor(private _authService: AuthService, private _notificationService: NotificationService) {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this._authService.handleAuthInit();
  }

  async signUp() {
    try {
      if (this.form.valid) {
        const hashedPassword = await this._authService.encryptPassword(this.form.value.userPassword);
        const signUpUserDto: SignUpUserDto = {
          userName: this.form.value.userName,
          userEmail: this.form.value.userEmail,
          userPassword: hashedPassword
        };

        const response = await this._authService.register(signUpUserDto);

        if (!response?.output.status) {
          this.form.get('userPassword')?.reset();
          this.form.get('userEmail')?.reset();
        }
      } else {
        this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Please fill out all required fields correctly', '', '', undefined);
      }
    } catch (error: any) {
      this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', `Something went wrong, please try again`, error?.message, '', undefined);
    }
  }
}