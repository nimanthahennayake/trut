import { Directive } from '@angular/core';

@Directive({
  selector: '[emrIncidentIcon]',
  exportAs: 'emrIncidentIcon',
  host: {
    'class': 'trut-incident-icon'
  }
})
export class IncidentIconDirective {
}
