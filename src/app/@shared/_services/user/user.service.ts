import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from '../notifications/common.notifications.service';
import { GetUsersInputDto, GetUsersOutputDto } from '@shared/_services/dtos/user.getusers.dto';
import { GetUserDetails } from '@shared/_services/utils/types/types';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private clientUrl = environment.apiClients?.armorlock_client;
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);

    constructor(
        private _http: HttpClient,
        private _router: Router,
        private _notificationService: NotificationService
    ) { }

    async getUsers(getUserDetails: GetUserDetails): Promise<GetUsersOutputDto | undefined> {
        try {
            const getUsersInputDto: GetUsersInputDto = { paginationInput: getUserDetails.pagination, searchTerm: getUserDetails.searchTerm, filterCriteria: getUserDetails.filterCriteria };
            const getUsersOutputDto = await this._http.post<GetUsersOutputDto>(`${this.clientUrl}/user/getusers`, getUsersInputDto).toPromise();
            //this.handleAuthentication(signedUserDto);
            return getUsersOutputDto;
        } catch (error: any) {
            this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Something went wrong, please try again', error.message, '', undefined);
            return undefined;
            //return { paginationOutput: getUserDetails.pagination, tableHeaders: undefined, users: undefined, output: undefined };
        }
    }
}
