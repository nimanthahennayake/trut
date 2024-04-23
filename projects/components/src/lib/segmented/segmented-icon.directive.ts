import { Directive } from '@angular/core';

@Directive({
  selector: '[emrSegmentedIcon]',
  exportAs: 'emrSegmentedIcon',
  host: {
    'class': 'trut-segmented-icon'
  }
})
export class SegmentedIconDirective {
}
