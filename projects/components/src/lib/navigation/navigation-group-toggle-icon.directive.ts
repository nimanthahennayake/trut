import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutNavigationGroupToggleIcon]',
  exportAs: 'trutNavigationGroupToggleIcon',
  host: {
    'class': 'trut-navigation-group-toggle-icon'
  }
})
export class NavigationGroupToggleIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
