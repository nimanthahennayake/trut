import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { TrutDividerModule } from 'protrack/components';
import { AuthService } from '../../../services/auth/auth.service';
import { SignedUserDto } from '../../../dtos/user.signin.dto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInUserDetails } from '../../../utils/types/types';
import { NotificationService } from '../../../services/notifications/common.notifications.service';
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
  form: FormGroup;

  constructor(private _authService: AuthService, private _router: Router, private _notificationService: NotificationService) {
    this.form = new FormGroup({
      user_email: new FormControl('', [Validators.required, Validators.email]),
      user_password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  async signIn() {
    console.log(this.form.value);
    try {
      if (this.form.valid) {
        const signInUserDetails: SignInUserDetails = {
          user_email: this.form.value?.user_email,
          user_password: this._authService.encryptPassword(this.form.value?.user_password)
        };
        const response: SignedUserDto | undefined = await this._authService.signIn(signInUserDetails);
      } else {
        this._notificationService.showBasicNotification('Please fill out all required fields correctly', '', undefined);
      }
    } catch (error: any) {
      this._notificationService.showBasicNotification(`Something went wrong, please try again. ${error?.message}`, '', undefined);
    }
  }

}
