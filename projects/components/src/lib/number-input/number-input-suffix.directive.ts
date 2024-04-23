import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutNumberInputSuffix]',
  exportAs: 'trutNumberInputSuffix'
})
export class NumberInputSuffixDirective {
  readonly templateRef = inject(TemplateRef);
}
