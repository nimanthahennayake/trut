import { Component } from '@angular/core';

@Component({
  selector: 'trut-panel-body',
  exportAs: 'trutPanelBody',
  templateUrl: './panel-body.component.html',
  styleUrls: ['./panel-body.component.css'],
  host: {
    'class': 'trut-panel-body'
  }
})
export class PanelBodyComponent {
}
