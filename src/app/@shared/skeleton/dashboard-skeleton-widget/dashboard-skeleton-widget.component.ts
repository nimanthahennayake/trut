import { Component } from '@angular/core';
import { TrutSkeletonModule } from 'trut/components';

@Component({
  selector: 'app-dashboard-skeleton-widget',
  standalone: true,
  imports: [
    TrutSkeletonModule
  ],
  templateUrl: './dashboard-skeleton-widget.component.html',
  styleUrl: './dashboard-skeleton-widget.component.scss'
})
export class DashboardSkeletonWidgetComponent {

}
