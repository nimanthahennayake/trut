import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[trutFilterBuilderOperationIcon]'
})
export class FilterBuilderOperationIconDirective {
  readonly templateRef = inject(TemplateRef);
}
