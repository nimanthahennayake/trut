import { booleanAttribute, Component, HostListener, inject, Input } from '@angular/core';
import { ULT_SEGMENTED } from '../types';
import { SegmentedComponent } from '../segmented/segmented.component';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'trut-segmented-button,[trut-segmented-button]',
  exportAs: 'trutSegmentedButton',
  templateUrl: './segmented-button.component.html',
  styleUrl: './segmented-button.component.css',
  hostDirectives: [
    MatRipple
  ],
  host: {
    'class': 'trut-segmented-button',
    '[class.is-selected]': '_isSelected',
    '[class.is-disabled]': 'disabled'
  }
})
export class SegmentedButtonComponent {
  readonly _segmented = inject<SegmentedComponent>(ULT_SEGMENTED, { skipSelf: true });

  @Input({ required: true })
  value: any;

  @Input({ transform: booleanAttribute })
  disabled = false;

  get _isSelected() {
    return this._segmented.api.isSelected(this.value);
  }

  get api() {
    return {
      isSelected: () => this._isSelected
    }
  }

  @HostListener('click')
  private _handleClick() {
    this._segmented.api.select(this.value);
  }
}
