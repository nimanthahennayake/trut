import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrNavigationGroupToggleIcon]',
  exportAs: 'emrNavigationGroupToggleIcon',
  host: {
    'class': 'trut-navigation-group-toggle-icon'
  }
})
export class NavigationGroupToggleIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
