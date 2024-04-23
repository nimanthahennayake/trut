import { Directive } from '@angular/core';

@Directive({
  selector: '[emrScrollSpyContainer]',
  exportAs: 'emrScrollSpyContainer',
  host: {
    'class': 'trut-scroll-spy-container'
  }
})
export class ScrollSpyContainerDirective {
}
