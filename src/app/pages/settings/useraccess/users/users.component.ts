import { Component, ViewChild } from '@angular/core';
import { LayoutBodyComponent } from 'protrack/components';
import { LayoutComponent } from 'protrack/components';
import { LayoutHeaderComponent } from 'protrack/components';
import { LayoutSidebarComponent } from 'protrack/components';
import { LayoutFooterComponent } from 'protrack/components';
import { LayoutTopbarComponent } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';
import { TrutAnnouncementModule } from 'protrack/components';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TrutDividerModule } from 'protrack/components';
import { MatDivider } from '@angular/material/divider';
import { TrutFilterBuilderModule, FilterBuilderFieldDef, FilterBuilderGroup, FilterBuilderItemType, IconComponent } from 'protrack/components';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 41, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 51, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 61, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 71, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 81, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 91, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 101, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutFooterComponent,
    LayoutTopbarComponent,
    MatIcon,
    TrutAnnouncementModule,
    MatTableModule,
    MatPaginatorModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    TrutDividerModule,
    MatDivider,
    TrutFilterBuilderModule,
    IconComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data: any = ELEMENT_DATA;
  numberOfRecords: number = 0;
  limit: number = 10;
  page: number = 1;
  isLoadingResults: boolean = true;
  filterValue: FilterBuilderGroup[] = [];
  fieldDefinitions: FilterBuilderFieldDef[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  protected searchText = '';

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  clearText() {
    throw new Error('Method not implemented.');
  }

}
