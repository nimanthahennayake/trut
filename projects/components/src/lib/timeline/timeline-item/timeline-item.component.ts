import { Component, ContentChild } from '@angular/core';
import { TimelineItemIndicatorDirective } from '../timeline-item-indicator.directive';

@Component({
  selector: 'trut-timeline-item',
  exportAs: 'emrTimelineItem',
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css',
  host: {
    'class': 'trut-timeline-item'
  }
})
export class TimelineItemComponent {
  @ContentChild(TimelineItemIndicatorDirective)
  readonly indicatorRef: TimelineItemIndicatorDirective;
}
