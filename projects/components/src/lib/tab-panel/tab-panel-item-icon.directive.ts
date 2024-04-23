import { Directive } from '@angular/core';

@Directive({
  selector: '[emrTabPanelItemIcon]',
  exportAs: 'emrTabPanelItemIcon',
  host: {
    'class': 'trut-tab-panel-item-icon'
  }
})
export class TabPanelItemIconDirective {
}
