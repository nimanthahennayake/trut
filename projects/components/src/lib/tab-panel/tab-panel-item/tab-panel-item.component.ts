import { Component, HostListener, inject, Input } from '@angular/core';
import { TabPanelApiService } from '../tab-panel-api.service';
import { TabPanelNavComponent } from '../tab-panel-nav/tab-panel-nav.component';
import { TAB_PANEL_NAV } from '../types';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'trut-tab-panel-item',
  exportAs: 'trutTabPanelItem',
  templateUrl: './tab-panel-item.component.html',
  styleUrls: ['tab-panel-item.component.css'],
  hostDirectives: [
    MatRipple
  ],
  host: {
    'class': 'trut-tab-panel-item',
    '[class.is-active]': 'api.isActive(this.for)',
  }
})
export class TabPanelItemComponent {
  readonly api = inject(TabPanelApiService);
  private _nav = inject<TabPanelNavComponent>(TAB_PANEL_NAV, { optional: true });

  @Input()
  for: any = this._nav ? this._nav.nextId++ : null;

  @HostListener('click')
  private _handleClick() {
    this.api.activate(this.for);
  }
}
