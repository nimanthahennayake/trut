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
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
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
import { CommonModule } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonService } from '../../../../../services/common.service';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { TrutResizableContainerModule } from 'trut/components';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatMiniFabButton } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

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
    CommonModule,
    MatProgressBar,
    MatTableModule,
    CdkDropList,
    CdkDrag,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    MatExpansionPanelTitle,
    MatTabsModule,
    TrutResizableContainerModule,
    MatOption,
    MatSelect,
    MatMiniFabButton,
    ReactiveFormsModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  tableSearch: FormGroup<{ searchTerm: any }>;
  stateOption01: FormGroup<{ userEmail: any; userStatus: any; }>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnProperties: any = [];
  displayedColumns: string[];
  paginationInput: PaginationInputDto = new PaginationInputDto;

  filterValue: FilterBuilderGroup[] = [];
  fieldDefinitions: FilterBuilderFieldDef[] = [];
  filterCriteria: any = [];
  securityUserData: any = [];
  isLoadingResults: boolean = true;
  filterOperator: FilterOperatorDto = new FilterOperatorDto;
  paginationOptions: any = environment.paginationSettings.pageSizeOptions;
  //protected searchTerm: string = '';
  protected editMode: boolean = false;

  clickedRow: any = [];

  panelOpenState = false;
  constructor(private _userService: UserService, private _notificationService: NotificationService, public _commonService: CommonService) {
    this.stateOption01 = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userStatus: new FormControl('', [Validators.required])
    });
    this.tableSearch = new FormGroup({
      searchTerm: new FormControl('', [Validators.required])
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  transformValue(input: string, type: string): string {
    return this._commonService.transformValue(input, type);
  }

  ngOnInit() {
    this.getUsers();
  }

  applyFilter(event: Event) {
    this.securityUserData.filter.set((event.target as HTMLInputElement).value.trim().toLowerCase());
  }

  clearText() {
    throw new Error('Method not implemented.');
  }

  async getUsers() {
    this.isLoadingResults = true;
    try {
      const response = await this._userService.getUsers({ pagination: this.paginationInput, searchTerm: this.tableSearch.value.searchTerm, filterCriteria: this.filterValue });
      if (response && response.tableHeaders) {
        this.securityUserData = response.users;
        this.displayedColumns = response.tableHeaders.columns
          .filter(col => col.columnVisible)
          .map(col => col.columnDatafieldName);
        this.columnProperties = response?.tableHeaders.columns.map(col => ({
          columnDataFieldName: col.columnDatafieldName,
          columnHeaderName: col.columnHeaderName,
          columnDataType: col.columnDataType,
          columnFilterable: col.columnFilterable,
          columnVisible: col.columnVisible,
          columnIsSortable: col.columnIsSortble,
          sticky: col.sticky
        }));
        this.securityUserData.paginator = this.paginator;
      }
      this.paginationInput = {
        page: <number>response?.paginationOutput.page,
        limit: <number>response?.paginationOutput.limit,
        numberOfRecords: <number>response?.paginationOutput.numberOfRecords
      };
    } catch (error: any) {
      this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Please try again', error.message, '', undefined);
    } finally {
      this.isLoadingResults = false;
    }
  }

  async onPaginateChange($event: PageEvent) {
    this.paginationInput.page = $event.pageIndex + 1;
    this.paginationInput.limit = $event.pageSize;
    await this.getUsers();
  }

  onSelectUser(row: any) {
    Object.assign(this.clickedRow, row)
    console.log(this.clickedRow);
  }

  focus($event: FocusEvent) {
    console.log($event);
  }
}
