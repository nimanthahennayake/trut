import { booleanAttribute, Component, Input } from '@angular/core';
import { LAYOUT } from '../types';

@Component({
  selector: 'trut-layout',
  exportAs: 'trutLayout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [
    {
      provide: LAYOUT,
      useExisting: LayoutComponent
    }
  ],
  host: {
    'class': 'trut-layout',
    '[class.is-window-mode]': 'windowMode'
  }
})
export class LayoutComponent {
  @Input()
  layoutId: string;

  @Input({ transform: booleanAttribute })
  windowMode = false;
}
