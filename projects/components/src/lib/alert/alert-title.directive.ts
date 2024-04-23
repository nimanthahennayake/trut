import { Directive } from '@angular/core';

@Directive({
  selector: 'trut-alert-title,[trutAlertTitle]',
  exportAs: 'trutAlertTitle',
  host: {
    'class': 'trut-alert-title'
  }
})
export class AlertTitleDirective {
}
