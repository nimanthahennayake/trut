import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { TrutNumberInputModule } from 'protrack/components';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-number-input-min-max-example',
  standalone: true,
  imports: [
    MatFormField,
    TrutNumberInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatLabel
  ],
  templateUrl: './number-input-min-max-example.component.html',
  styleUrl: './number-input-min-max-example.component.scss'
})
export class NumberInputMinMaxExampleComponent {
  value = 3;
  control = new FormControl(3, {
    validators: [Validators.min(2), Validators.max(5)]
  });
}
