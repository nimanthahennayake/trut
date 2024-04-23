import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutNavigationItemIcon]',
  exportAs: 'trutNavigationItemIcon',
  host: {
    'class': 'trut-navigation-item-icon'
  }
})
export class NavigationItemIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
