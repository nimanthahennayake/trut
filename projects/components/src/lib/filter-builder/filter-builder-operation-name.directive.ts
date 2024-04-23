import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutFilterBuilderOperationName]'
})
export class FilterBuilderOperationNameDirective {
  readonly templateRef = inject(TemplateRef);
}
