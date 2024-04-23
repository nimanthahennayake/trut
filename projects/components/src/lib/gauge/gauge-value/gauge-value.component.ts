import { Component } from '@angular/core';

@Component({
  selector: 'trut-gauge-value',
  exportAs: 'trutGaugeValue',
  templateUrl: './gauge-value.component.html',
  styleUrls: ['./gauge-value.component.css'],
  host: {
    'class': 'trut-gauge-value'
  }
})
export class GaugeValueComponent {
}
