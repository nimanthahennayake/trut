import { Directive } from '@angular/core';

@Directive({
  selector: 'trut-alert-title,[emrAlertTitle]',
  exportAs: 'emrAlertTitle',
  host: {
    'class': 'trut-alert-title'
  }
})
export class AlertTitleDirective {
}
