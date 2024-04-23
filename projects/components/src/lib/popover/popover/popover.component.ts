import { Component } from '@angular/core';

@Component({
  selector: 'trut-popover',
  exportAs: 'emrPopover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  host: {
    'class': 'trut-popover'
  }
})
export class PopoverComponent {
}
