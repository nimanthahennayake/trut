import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInUserDto, SignedUserDto } from '../../dtos/user.signin.dto'; // Corrected typo here
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from '../notifications/common.notifications.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private client_url = environment.apiClients?.armorlock_client;

    constructor(private _http: HttpClient, private _router: Router, private _notificationService: NotificationService) { }

    async signIn(signInUserDto: SignInUserDto): Promise<SignedUserDto | undefined> {
        try {
            const signedUserDto: SignedUserDto | undefined = await this._http.post<SignedUserDto>(`${this.client_url}/users/signin`, signInUserDto).toPromise();

            if (signedUserDto && signedUserDto?.output) {
                this._notificationService.showApiNotification(signedUserDto?.output);
                if (signedUserDto?.output.status === environment.outputStatus?.success) {
                    localStorage.setItem('token_armorlock_client', signedUserDto?.access_token);
                    localStorage.setItem('successful_login', 'true');
                    localStorage.setItem('login_time', new Date().toString());
                    this._router.navigate(['/pages']);
                } else {
                    localStorage.setItem('successful_login', 'false');
                    //this.user_password = '';
                }
            } else {
                this._notificationService.showBasicNotification('Something went wrong, please try again', '', undefined);
            }

            return signedUserDto;

        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }

    async signOut(): Promise<void> {
        try {
            //await this.http.post<void>(`${this.client_url}/users/signout`, {}).toPromise();
            this._router.navigate(['/auth']);
        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }
}
