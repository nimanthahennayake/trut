import { Component } from '@angular/core';
import { TrutColorPickerModule } from 'protrack/components';

@Component({
  selector: 'app-color-picker-with-popover-example',
  standalone: true,
  imports: [
    TrutColorPickerModule
  ],
  templateUrl: './color-picker-with-popover-example.component.html',
  styleUrl: './color-picker-with-popover-example.component.scss'
})
export class ColorPickerWithPopoverExampleComponent {
  color = 'green';
}
