import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutDecreaseControl]',
  exportAs: 'trutDecreaseControl'
})
export class DecreaseControlDirective {
  readonly templateRef = inject(TemplateRef);
}
