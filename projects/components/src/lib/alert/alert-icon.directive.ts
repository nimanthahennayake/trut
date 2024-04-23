import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutAlertIcon]',
  exportAs: 'trutAlertIcon',
  host: {
    'class': 'trut-alert-icon'
  }
})
export class AlertIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
