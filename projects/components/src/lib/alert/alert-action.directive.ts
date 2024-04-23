import { Directive } from '@angular/core';

@Directive({
  selector: '[emrAlertAction]',
  exportAs: 'emrAlertAction',
  host: {
    'class': 'trut-alert-action'
  }
})
export class AlertActionDirective {
}
