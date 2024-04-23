import { Component, ElementRef, inject, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'trut-panel-header',
  exportAs: 'trutPanelHeader',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css'],
  host: {
    'class': 'trut-panel-header'
  }
})
export class PanelHeaderComponent implements OnDestroy {
  private _elementRef = inject(ElementRef);

  @Input()
  set height(height: string | number) {
    this._elementRef.nativeElement.style.setProperty('--trut-panel-header-height', height + 'px');
  }

  ngOnDestroy() {
    this._elementRef.nativeElement.style.removeProperty('--trut-panel-header-height');
  }
}
