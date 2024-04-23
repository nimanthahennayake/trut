import { Component } from '@angular/core';
import { TrutPinInputModule } from 'protrack/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-pin-input-example',
  standalone: true,
  imports: [
    TrutPinInputModule,
    FormsModule

  ],
  templateUrl: './basic-pin-input-example.component.html',
  styleUrl: './basic-pin-input-example.component.scss'
})
export class BasicPinInputExampleComponent {
  value = '';
}
