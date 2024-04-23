import { Component } from '@angular/core';

@Component({
  selector: 'trut-file-list',
  exportAs: 'trutFileList',
  templateUrl: './file-list.component.html',
  styleUrls: ['file-list.component.css'],
  host: {
    'class': 'trut-file-list'
  }
})
export class FileListComponent {
}
