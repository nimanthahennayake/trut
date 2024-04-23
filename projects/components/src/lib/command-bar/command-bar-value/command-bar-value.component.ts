import { Component } from '@angular/core';

@Component({
  selector: 'trut-command-bar-value',
  exportAs: 'emrCommandBarValue',
  templateUrl: './command-bar-value.component.html',
  styleUrl: './command-bar-value.component.css',
  host: {
    'class': 'trut-command-bar-value'
  }
})
export class CommandBarValueComponent {
}
