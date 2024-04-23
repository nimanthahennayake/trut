import { Component } from '@angular/core';

@Component({
  selector: 'trut-tab-panel-header',
  exportAs: 'emrTabPanelHeader',
  templateUrl: './tab-panel-header.component.html',
  styleUrls: ['./tab-panel-header.component.css'],
  host: {
    'class': 'trut-tab-panel-header'
  }
})
export class TabPanelHeaderComponent {
}
