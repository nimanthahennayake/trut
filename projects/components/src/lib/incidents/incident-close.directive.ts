import { Directive } from '@angular/core';

@Directive({
  selector: '[trutIncidentClose]',
  exportAs: 'trutIncidentClose',
  host: {
    'class': 'trut-incident-close'
  }
})
export class IncidentCloseDirective {
}
