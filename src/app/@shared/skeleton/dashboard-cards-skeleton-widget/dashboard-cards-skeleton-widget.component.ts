import { Component, input, numberAttribute } from '@angular/core';
import { TrutSkeletonModule } from 'protrack/components';

@Component({
  selector: 'app-dashboard-cards-skeleton-widget',
  standalone: true,
  imports: [
    TrutSkeletonModule
  ],
  templateUrl: './dashboard-cards-skeleton-widget.component.html',
  styleUrl: './dashboard-cards-skeleton-widget.component.scss'
})
export class DashboardCardsSkeletonWidgetComponent {
  count = input(2, {
    transform: numberAttribute
  });
}
