import { Component } from '@angular/core';

@Component({
  selector: 'trut-file-control,[trut-file-control]',
  exportAs: 'trutFileControl',
  templateUrl: './file-control.component.html',
  styleUrls: ['./file-control.component.css'],
  host: {
    'class': 'trut-file-control'
  }
})
export class FileControlComponent {
}
