import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { BreadcrumbItemDefDirective } from '../breadcrumb-item-def.directive';
import { BreadcrumbSeparatorDefDirective } from '../breadcrumb-separator-def.directive';
import { BreadcrumbActiveItemDefDirective } from '../breadcrumb-active-item-def.directive';

@Component({
  selector: 'trut-breadcrumbs',
  exportAs: 'trutBreadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  host: {
    class: 'trut-breadcrumbs'
  }
})
export class BreadcrumbsComponent {
  @ContentChild(BreadcrumbItemDefDirective, { read: TemplateRef }) itemRef!: TemplateRef<any>;
  @ContentChild(BreadcrumbActiveItemDefDirective, { read: TemplateRef }) activeItemRef!: TemplateRef<any>;
  @ContentChild(BreadcrumbSeparatorDefDirective, { read: TemplateRef }) separatorRef!: TemplateRef<any>;

  @Input() dataSource: any[] = [];
}
