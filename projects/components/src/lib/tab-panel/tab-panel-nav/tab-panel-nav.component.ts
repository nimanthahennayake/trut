import { Component } from '@angular/core';
import { TAB_PANEL_NAV } from '../types';

@Component({
  selector: 'trut-tab-panel-nav',
  exportAs: 'emrTabPanelNav',
  templateUrl: './tab-panel-nav.component.html',
  styleUrls: ['./tab-panel-nav.component.css'],
  providers: [
    {
      provide: TAB_PANEL_NAV,
      useExisting: TabPanelNavComponent
    }
  ],
  host: {
    'class': 'trut-tab-panel-nav'
  }
})
export class TabPanelNavComponent {
  nextId = 0;
}
