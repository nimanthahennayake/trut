import { Directive } from '@angular/core';

@Directive({
  selector: '[trutSegmentedIcon]',
  exportAs: 'trutSegmentedIcon',
  host: {
    'class': 'trut-segmented-icon'
  }
})
export class SegmentedIconDirective {
}
