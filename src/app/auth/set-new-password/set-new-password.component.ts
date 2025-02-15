import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { TrutPinInputModule } from 'trut/components';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PasswordStrengthModule } from 'trut/components';

@Component({
  selector: 'app-set-new-password',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    TrutPinInputModule,
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    PasswordStrengthModule,
    MatHint
  ],
  templateUrl: './set-new-password.component.html',
  styleUrl: './set-new-password.component.scss'
})
export class SetNewPasswordComponent {
  private _router = inject(Router);
  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  get passwordValue(): string {
    return this.form.get('password')?.value as string;
  }

  resetPassword() {
    this._router.navigateByUrl('/auth/done');
  }
}
