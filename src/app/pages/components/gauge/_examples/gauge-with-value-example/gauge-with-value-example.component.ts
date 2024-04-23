import { Component } from '@angular/core';
import { TrutGaugeModule } from 'protrack/components';

@Component({
  selector: 'app-gauge-with-value-example',
  standalone: true,
  imports: [
    TrutGaugeModule
  ],
  templateUrl: './gauge-with-value-example.component.html',
  styleUrl: './gauge-with-value-example.component.scss'
})
export class GaugeWithValueExampleComponent {

}
