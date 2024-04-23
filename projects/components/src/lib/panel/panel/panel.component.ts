import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'trut-panel',
  exportAs: 'emrPanel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  host: {
    'class': 'trut-panel',
    '[class.is-absolute]': 'absolute'
  }
})
export class PanelComponent {
  @Input({ transform: booleanAttribute })
  absolute = false
}
