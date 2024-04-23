import { Directive } from '@angular/core';

@Directive({
  selector: '[trutScrollSpyContainer]',
  exportAs: 'trutScrollSpyContainer',
  host: {
    'class': 'trut-scroll-spy-container'
  }
})
export class ScrollSpyContainerDirective {
}
