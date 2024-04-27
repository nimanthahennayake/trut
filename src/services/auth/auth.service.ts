import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInUserDto, SignedUserDto } from '../../dtos/user.signin.dto';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from '../notifications/common.notifications.service';
import { SignUpUserDto, SignedUpUserDto } from '../../dtos/user.signup.dto';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private client_url = environment.apiClients?.armorlock_client;

    constructor(private _http: HttpClient, private _router: Router, private _notificationService: NotificationService) { }

    encryptPassword(password: string): string {
        return password;
    }

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
                }
            } else {
                this._notificationService.showBasicNotification('Something went wrong, please try again', '', undefined);
            }

            return signedUserDto;

        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }

    async hasFunction(function_code: string): Promise<boolean> {
        return false;
    }

    async isLoggedIn(): Promise<boolean> {
        return true;
    }

    async signOut(): Promise<void> {
        try {
            //await this.http.post<void>(`${this.client_url}/users/signout`, {}).toPromise();
            localStorage.clear();
            this._router.navigate(['/auth']);
        } catch (error: any) {
            throw new Error(`API failed, ${error?.message}`);
        }
    }

    async register(signUpUserDto: SignUpUserDto): Promise<SignedUpUserDto | undefined> {
        try {
            const signedUpUserDto: SignedUpUserDto | undefined = await this._http.post<SignedUpUserDto>(`${this.client_url}/users/signup`, signUpUserDto).toPromise();

            if (signedUpUserDto && signedUpUserDto?.output) {
                this._notificationService.showApiNotification(signedUpUserDto?.output);
                if (signedUpUserDto?.output.status === environment.outputStatus?.success) {
                    localStorage.clear();
                    this._router.navigate(['/auth']);
                }
            } else {
                this._notificationService.showBasicNotification('Something went wrong, please try again', '', undefined);
            }

            return signedUpUserDto;

        } catch (error: any) {
            throw new Error(`Something went wrong, api failed: ${error?.message}`);
        }
    }
}
