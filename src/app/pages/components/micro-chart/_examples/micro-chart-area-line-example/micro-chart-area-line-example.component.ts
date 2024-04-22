import { Component } from '@angular/core';
import { AreaLineChartComponent } from 'protrack/components';

@Component({
  selector: 'app-micro-chart-area-line-example',
  standalone: true,
  imports: [
    AreaLineChartComponent
  ],
  templateUrl: './micro-chart-area-line-example.component.html',
  styleUrl: './micro-chart-area-line-example.component.scss'
})
export class MicroChartAreaLineExampleComponent {
  data: number[] = [5, 20, 15, 50, 25, 50];
}
