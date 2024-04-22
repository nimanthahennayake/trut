import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { PasswordStrengthModule } from 'protrack/components';
import { EmrDividerModule } from 'protrack/components';
import { EmrPhoneInputModule } from 'protrack/components';
import { phoneValidator } from 'protrack/components';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    PasswordStrengthModule,
    EmrDividerModule,
    EmrPhoneInputModule,
    MatError
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    phone: ['', [Validators.required, phoneValidator]]
  });

  get passwordValue(): string {
    return this.form.get('password')?.value || '';
  }
}
