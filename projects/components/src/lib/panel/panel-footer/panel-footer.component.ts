import { Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'trut-panel-footer',
  exportAs: 'trutPanelFooter',
  templateUrl: './panel-footer.component.html',
  styleUrls: ['./panel-footer.component.css'],
  host: {
    'class': 'trut-panel-footer'
  }
})
export class PanelFooterComponent {
  private _elementRef = inject(ElementRef);

  @Input()
  set height(height: string | number) {
    this._elementRef.nativeElement.style.setProperty('--trut-panel-footer-height', height + 'px');
  }

  ngOnDestroy() {
    this._elementRef.nativeElement.style.removeProperty('--trut-panel-footer-height');
  }
}
