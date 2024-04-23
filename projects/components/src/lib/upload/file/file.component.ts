import { Component, Input } from '@angular/core';
import { UploadFileState } from '../properties';

@Component({
  selector: 'trut-file',
  exportAs: 'trutFile',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  host: {
    'class': 'trut-file'
  }
})
export class FileComponent {
  @Input()
  name!: string | number;

  @Input()
  size!: string | unknown;

  @Input()
  progress!: number | unknown;

  @Input()
  progressingMessage!: string | unknown;

  @Input()
  errorMessage!: string | unknown;

  @Input()
  remainingTime!: string | unknown;

  @Input()
  state: UploadFileState = 'uploading';


}
