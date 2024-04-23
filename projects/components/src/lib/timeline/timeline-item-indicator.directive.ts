import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutTimelineItemIndicator]',
  exportAs: 'trutTimelineItemIndicator'
})
export class TimelineItemIndicatorDirective {
  readonly templateRef = inject(TemplateRef);
}
