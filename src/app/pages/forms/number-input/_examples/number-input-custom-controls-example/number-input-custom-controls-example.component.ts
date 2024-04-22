import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { EmrNumberInputModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-number-input-custom-controls-example',
  standalone: true,
  imports: [
    MatFormField,
    EmrNumberInputModule,
    MatIcon,
    MatLabel
  ],
  templateUrl: './number-input-custom-controls-example.component.html',
  styleUrl: './number-input-custom-controls-example.component.scss'
})
export class NumberInputCustomControlsExampleComponent {

}
