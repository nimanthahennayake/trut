import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutIncreaseControl]',
  exportAs: 'trutIncreaseControl'
})
export class IncreaseControlDirective {
  readonly templateRef = inject(TemplateRef);
}
