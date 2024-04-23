import { Component } from '@angular/core';
import { TrutPinInputModule } from 'protrack/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pin-input-with-placeholder-example',
  standalone: true,
  imports: [
    TrutPinInputModule,
    FormsModule
  ],
  templateUrl: './pin-input-with-placeholder-example.component.html',
  styleUrl: './pin-input-with-placeholder-example.component.scss'
})
export class PinInputWithPlaceholderExampleComponent {
  value = '';
}
