import { Component } from '@angular/core';
import { TAB_PANEL_ASIDE } from '../types';

@Component({
  selector: 'trut-tab-panel-aside',
  exportAs: 'trutTabPanelAside',
  templateUrl: './tab-panel-aside.component.html',
  styleUrls: ['./tab-panel-aside.component.css'],
  providers: [
    {
      provide: TAB_PANEL_ASIDE,
      useExisting: TabPanelAsideComponent
    }
  ],
  host: {
    'class': 'trut-tab-panel-aside'
  }
})
export class TabPanelAsideComponent {
  nextId = 0;
}
