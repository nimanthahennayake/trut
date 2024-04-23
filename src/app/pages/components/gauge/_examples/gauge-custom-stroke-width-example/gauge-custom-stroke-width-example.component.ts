import { Component } from '@angular/core';
import { TrutGaugeModule } from 'protrack/components';

@Component({
  selector: 'app-gauge-custom-stroke-width-example',
  standalone: true,
  imports: [
    TrutGaugeModule
  ],
  templateUrl: './gauge-custom-stroke-width-example.component.html',
  styleUrl: './gauge-custom-stroke-width-example.component.scss'
})
export class GaugeCustomStrokeWidthExampleComponent {

}
