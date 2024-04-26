import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { TrutDividerModule } from 'protrack/components';
import { AuthService } from '../../../services/users/users.service';
import { SignInUserDto } from '../../../dtos/user.signin.dto';
import { FormsModule } from '@angular/forms';

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

  constructor(private authService: AuthService, private router: Router) { }

  async signIn() {
    try {
      // Encrypt the password before sending it to the server
      const encryptedPassword = this.encryptPassword(this.user_password);

      const signInUserDto: SignInUserDto = {
        user_email: this.user_email,
        user_password: encryptedPassword
      };

      console.log(signInUserDto);

      const response = await this.authService.signIn(signInUserDto);

      console.log(response);

      // Store authentication data securely (e.g., in local storage)
      //localStorage.setItem('accessToken', response.accessToken);

      // Redirect to the home page or any other desired route after successful login
      //this.router.navigate(['/home']);
    } catch (error) {
      // Handle sign-in error (e.g., display error message)
      console.error('Sign-in error:', error);
    }
  }

  // Placeholder function for encrypting the password (you may need to implement your own encryption method)
  encryptPassword(password: string): string {
    // Implement your encryption logic here
    return password;
  }
}
