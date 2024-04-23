import { Component } from '@angular/core';
import { TrutUploadModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

export interface File {
  name: string,
  state: 'uploaded' | 'uploading' | 'error',
  processing?: boolean,
  errorMessage?: string,
  remainingTime?: string,
  size?: string,
  progress?: number
}

@Component({
  selector: 'app-file-list-example',
  standalone: true,
  imports: [
    TrutUploadModule,
    MatIcon
  ],
  templateUrl: './file-list-example.component.html',
  styleUrl: './file-list-example.component.scss'
})
export class FileListExampleComponent {
  fileList: File[] = [
    {
      name: 'Annual Report.docx',
      state: 'uploaded',
      processing: false
    },
    {
      name: 'Workflow.pdf',
      state: 'uploading',
      processing: false,
      remainingTime: '(remaining time: 00:2:01)',
      size: '11MB',
      progress: 60
    },
    {
      name: 'Financials.xlsx',
      state: 'error',
      errorMessage: 'An error occurred'
    }
  ];
}
