import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { TrutNumberInputModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-number-input-custom-controls-example',
  standalone: true,
  imports: [
    MatFormField,
    TrutNumberInputModule,
    MatIcon,
    MatLabel
  ],
  templateUrl: './number-input-custom-controls-example.component.html',
  styleUrl: './number-input-custom-controls-example.component.scss'
})
export class NumberInputCustomControlsExampleComponent {

}
