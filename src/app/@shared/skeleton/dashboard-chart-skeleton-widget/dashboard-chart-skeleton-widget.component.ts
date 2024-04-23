import { Component } from '@angular/core';
import { TrutSkeletonModule } from 'protrack/components';

@Component({
  selector: 'app-dashboard-chart-skeleton-widget',
  standalone: true,
  imports: [
    TrutSkeletonModule
  ],
  templateUrl: './dashboard-chart-skeleton-widget.component.html',
  styleUrl: './dashboard-chart-skeleton-widget.component.scss'
})
export class DashboardChartSkeletonWidgetComponent {

}
