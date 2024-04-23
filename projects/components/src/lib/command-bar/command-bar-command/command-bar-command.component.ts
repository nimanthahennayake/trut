import { Component, Input } from '@angular/core';

@Component({
  selector: 'trut-command-bar-command',
  exportAs: 'trutCommandBarCommand',
  templateUrl: './command-bar-command.component.html',
  styleUrl: './command-bar-command.component.css',
  host: {
    'class': 'trut-command-bar-command'
  }
})
export class CommandBarCommandComponent {
  @Input()
  shortcut: string;
}
