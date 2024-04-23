import { Component } from '@angular/core';
import { TrutGaugeModule } from 'protrack/components';

@Component({
  selector: 'app-basic-gauge-example',
  standalone: true,
  imports: [
    TrutGaugeModule
  ],
  templateUrl: './basic-gauge-example.component.html',
  styleUrl: './basic-gauge-example.component.scss'
})
export class BasicGaugeExampleComponent {

}
