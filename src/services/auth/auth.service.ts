import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as bcrypt from 'bcryptjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from '../notifications/common.notifications.service';
import { SignInUserDto, SignedUserDto } from '../../dtos/user.signin.dto';
import { SignUpUserDto, SignedUpUserDto } from '../../dtos/user.signup.dto';
import { OutputDto } from '../../dtos/common.output.status.dtp';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private client_url = environment.apiClients?.armorlock_client;
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);

    constructor(
        private _http: HttpClient,
        private _router: Router,
        private _notificationService: NotificationService
    ) {
        this.handleAuthInit();
    }

    async signIn(signInUserDto: SignInUserDto): Promise<SignedUserDto | undefined> {
        try {
            const signedUserDto = await this._http.post<SignedUserDto>(`${this.client_url}/users/signin`, signInUserDto).toPromise();
            this.handleAuthentication(signedUserDto);
            return signedUserDto;
        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }

    async register(signUpUserDto: SignUpUserDto): Promise<SignedUpUserDto | undefined> {
        try {
            const signedUpUserDto = await this._http.post<SignedUpUserDto>(`${this.client_url}/users/signup`, signUpUserDto).toPromise();
            this.handleRegister(signedUpUserDto);
            return signedUpUserDto;
        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }

    async resetPassword(user_email: string): Promise<boolean> {
        try {
            const resetPasswordDto: { user_email: string } = { user_email };
            const outputDto = await this._http.post<OutputDto>(`${this.client_url}/users/resetpassword`, resetPasswordDto).toPromise();
            this._notificationService.showApiNotification(outputDto);
            return outputDto?.status === environment.outputStatus?.success;
        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }

    async encryptPassword(user_password: string): Promise<string> {
        return user_password; //bcrypt.hash(user_password, bcrypt.genSaltSync(environment.bcryptSalt));
    }

    async encryptText(input: string): Promise<string> {
        return bcrypt.hash(input, bcrypt.genSaltSync(environment.bcryptSalt));
    }


    async compareStatus(input: string, hashed_status: string | null): Promise<boolean> {
        return hashed_status ? bcrypt.compare(input, hashed_status) : false;
    }

    async handleAuthInit(): Promise<void> {
        const isLoggedIn = await this.isLoggedIn();
        if (isLoggedIn) {
            this._router.navigate([environment.defaultPaths.home]);
        }
    }

    async signOut(): Promise<void> {
        localStorage.clear();
        this.isLoggedInSubject.next(false);
        this._router.navigate([environment.defaultPaths.auth]);
    }

    async isLoggedIn(): Promise<boolean> {
        const isLoggedInValue: boolean = await this.isLoggedInSubject.value;
        return isLoggedInValue;
    }

    private async handleAuthentication(response: SignedUserDto | undefined): Promise<void> {
        if (response) {
            this._notificationService.showApiNotification(response?.output);
            if (response?.output.status === environment.outputStatus?.success) {
                localStorage.setItem(environment.storageItems.token_armorlock_client, response?.access_token);
                localStorage.setItem(environment.storageItems.successful_signin, await this.encryptText('true'));
                localStorage.setItem(environment.storageItems.singed_user_id, await this.encryptText(response?.user_id));
                localStorage.setItem(environment.storageItems.singed_time, new Date().toString());
                this.isLoggedInSubject.next(true);
                this._router.navigate([environment.defaultPaths.home]);
            } else {
                localStorage.setItem(environment.storageItems.successful_signin, await this.encryptText('false'));
            }
        } else {
            this._notificationService.showBasicNotification('Something went wrong, please try again', '', undefined);
        }
    }

    private async handleRegister(response: SignedUpUserDto | undefined): Promise<void> {
        if (response) {
            this._notificationService.showApiNotification(response?.output);
            if (response?.output.status === environment.outputStatus?.success) {
                this._router.navigate([environment.defaultPaths.auth]);
            } else {
                this._notificationService.showBasicNotification('Something went wrong, please try again', '', undefined);
            }
        } else {
            this._notificationService.showBasicNotification('Something went wrong, please try again', '', undefined);
        }
    }

    async hasFunction(function_code: any) {
        return true;
    }
}
