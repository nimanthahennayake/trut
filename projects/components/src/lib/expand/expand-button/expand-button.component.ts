import { Component } from '@angular/core';

@Component({
  selector: 'trut-expand-button, [trut-expand-button]',
  exportAs: 'trutExpandButton',
  templateUrl: './expand-button.component.html',
  styleUrl: './expand-button.component.css',
  host: {
    'class': 'trut-expand-button'
  }
})
export class ExpandButtonComponent {
}
