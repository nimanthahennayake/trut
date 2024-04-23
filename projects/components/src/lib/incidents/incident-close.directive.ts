import { Directive } from '@angular/core';

@Directive({
  selector: '[emrIncidentClose]',
  exportAs: 'emrIncidentClose',
  host: {
    'class': 'trut-incident-close'
  }
})
export class IncidentCloseDirective {
}
