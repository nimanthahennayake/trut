import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutNumberInputPrefix]',
  exportAs: 'trutNumberInputPrefix'
})
export class NumberInputPrefixDirective {
  readonly templateRef = inject(TemplateRef);
}
