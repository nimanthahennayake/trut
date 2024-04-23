import { Directive } from '@angular/core';

@Directive({
  selector: '[trutIncidentIcon]',
  exportAs: 'trutIncidentIcon',
  host: {
    'class': 'trut-incident-icon'
  }
})
export class IncidentIconDirective {
}
