import { Component } from '@angular/core';
import { TrutDividerModule } from 'trut/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { DatePipe } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  standalone: true,
  imports: [
    TrutDividerModule,
    MatButton,
    MatIcon,
    MatSlideToggle,
    DatePipe,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'
})
export class SessionsComponent {
  webBrowsersDataSource = new MatTableDataSource([]);
  webBrowsersDisplayedColumns = ['browser', 'location', 'recentActivity', 'terminate'];

  devicesDataSource = new MatTableDataSource([]);
  devicesDisplayedColumns = ['browser', 'location', 'recentActivity', 'terminate'];
}
