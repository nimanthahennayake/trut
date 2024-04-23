import { Component, ElementRef, inject, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'trut-color-picker-thumbnail,[trut-color-picker-thumbnail]',
  exportAs: 'emrColorPickerThumbnail',
  templateUrl: './color-picker-thumbnail.component.html',
  styleUrls: ['./color-picker-thumbnail.component.css'],
  host: {
    'class': 'trut-color-picker-thumbnail'
  }
})
export class ColorPickerThumbnailComponent {
  private _elementRef = inject(ElementRef);

  @Input()
  color: string;

  ngOnChanges(changes: SimpleChanges) {
    if (!this.color) {
      return;
    }

    this._elementRef.nativeElement.style.setProperty('--trut-color-picker-thumbnail-bg', this.color);
  }
}
