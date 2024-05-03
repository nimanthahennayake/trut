import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from '../notifications/common.notifications.service';
import { SignInUserDto, SignedUserDto } from '../../dtos/user.signin.dto';

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

    async getUsers(signInUserDto: SignInUserDto): Promise<SignedUserDto | undefined> {
        try {
            const signedUserDto = await this._http.post<SignedUserDto>(`${this.clientUrl}/users/signin`, signInUserDto).toPromise();
            //this.handleAuthentication(signedUserDto);
            return signedUserDto;
        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }
}
