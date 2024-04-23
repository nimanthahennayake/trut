import { Directive } from '@angular/core';

@Directive({
  selector: '[trutTabPanelItemIcon]',
  exportAs: 'trutTabPanelItemIcon',
  host: {
    'class': 'trut-tab-panel-item-icon'
  }
})
export class TabPanelItemIconDirective {
}
