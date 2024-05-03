import { Component, ViewChild } from '@angular/core';
import { LayoutBodyComponent } from 'trut/components';
import { LayoutComponent } from 'trut/components';
import { LayoutHeaderComponent } from 'trut/components';
import { LayoutSidebarComponent } from 'trut/components';
import { LayoutFooterComponent } from 'trut/components';
import { LayoutTopbarComponent } from 'trut/components';
import { MatIcon } from '@angular/material/icon';
import { TrutAnnouncementModule } from 'trut/components';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TrutDividerModule } from 'trut/components';
import { MatDivider } from '@angular/material/divider';
import { TrutFilterBuilderModule, FilterBuilderFieldDef, FilterBuilderGroup, IconComponent } from 'trut/components';
import { PaginationInputDto } from '../../../../../dtos/common.pagination.dto';
import { FilterOperatorDto } from '../../../../../dtos/common.filter.operator.dto';
import { environment } from '../../../../../environments/environment';
import { UserService } from '../../../../../services/user/user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../../services/notifications/common.notifications.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  form: FormGroup<{ userEmail: any; userPassword: any; }>;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  filterValue: FilterBuilderGroup[] = [];
  fieldDefinitions: FilterBuilderFieldDef[] = [];
  paginationInput: PaginationInputDto = new PaginationInputDto;
  filterCriteria: any = [];
  securityUserData: any = [];
  isLoadingResults: boolean = true;
  filterOperator: FilterOperatorDto = new FilterOperatorDto;
  paginationOptions: any = environment.paginationSettings.pageSizeOptions;
  protected searchTerm: string = '';
  protected editMode: boolean = false;

  constructor(private _userService: UserService, private _router: Router, private _notificationService: NotificationService) {
    this.form = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this._userService.getUsers({ pagination: this.paginationInput, searchTerm: this.searchTerm, filterCriteria: this.filterValue });
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.securityUserData.filter = filterValue.trim().toLowerCase();
  }

  clearText() {
    throw new Error('Method not implemented.');
  }

}
