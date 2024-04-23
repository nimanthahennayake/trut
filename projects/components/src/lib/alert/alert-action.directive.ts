import { Directive } from '@angular/core';

@Directive({
  selector: '[trutAlertAction]',
  exportAs: 'trutAlertAction',
  host: {
    'class': 'trut-alert-action'
  }
})
export class AlertActionDirective {
}
