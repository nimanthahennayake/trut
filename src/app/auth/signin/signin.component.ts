import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { TrutDividerModule } from 'protrack/components';
import { AuthService } from '../../../services/auth/auth.service';
import { SignedUserDto } from '../../../dtos/user.signin.dto';
import { FormsModule } from '@angular/forms';
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
    TrutDividerModule,
    FormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  user_email: string = '';
  user_password: string = '';

  constructor(private authService: AuthService, private router: Router, private notificationService: NotificationService) { }

  async signIn() {
    try {
      const encryptedPassword = this.encryptPassword(this.user_password);

      const signInUserDetails: SignInUserDetails = {
        user_email: this.user_email,
        user_password: encryptedPassword
      };

      const response: SignedUserDto | undefined = await this.authService.signIn(signInUserDetails);

      
    } catch (error: any) {
      this.notificationService.showBasicNotification(`Something went wrong, please try again. ${error?.message}`, '', undefined);
    }
  }

  encryptPassword(password: string): string {
    return password;
  }
}
