import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { TrutDividerModule } from 'trut/components';
import { AuthService } from '@shared/@services/auth/auth.service';
import { SignedUserDto } from '@shared/@dtos/user.signin.dto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInUserDetails } from '@shared/@utils/types/types';
import { NotificationService } from '@shared/@services/notifications/common.notifications.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    RouterLink,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatIconButton,
    MatSuffix,
    MatError,
    TrutDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  form: FormGroup<{ userEmail: any; userPassword: any; }>;

  constructor(private _authService: AuthService, private _router: Router, private _notificationService: NotificationService) {
    this.form = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this._authService.handleAuthInit();
  }

  async signIn() {
    try {
      if (this.form.valid) {
        const hashedPassword = await this._authService.encryptPassword(this.form.value.userPassword);
        const signInUserDetails: SignInUserDetails = {
          userEmail: this.form.value.userEmail,
          userPassword: hashedPassword
        };
        const response = await this._authService.signIn(signInUserDetails);

        if (!response?.userId) {
          this.form.get('userPassword')?.reset();
        }
      } else {
        this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Please fill out all required fields correctly', '', '', undefined);
      }
    } catch (error: any) {
      this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', `Please try again`, error?.message, '', undefined);
    }
  }

}
