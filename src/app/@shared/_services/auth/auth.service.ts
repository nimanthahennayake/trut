import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as bcrypt from 'bcryptjs';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from '../notifications/common.notifications.service';
import { SignInUserDto, SignedUserDto } from '@shared/_services/dtos/user.signin.dto';
import { SignUpUserDto, SignedUpUserDto } from '@shared/_services/dtos/user.signup.dto';
import { OutputDto } from '@shared/_services/dtos/common.output.status.dtp';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private clientUrl = environment.apiClients?.armorlock_client;
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);

    constructor(
        private _http: HttpClient,
        private _router: Router,
        private _notificationService: NotificationService
    ) {
        this.handleAuthInit();
    }

    async handleAuthInit(): Promise<void> {
        const isLoggedIn = await this.isLoggedIn();
        if (isLoggedIn) {
            this._router.navigate([environment.defaultPaths.home]);
        }
    }

    async signIn(signInUserDto: SignInUserDto): Promise<SignedUserDto | undefined> {
        try {
            const signedUserDto = await this._http.post<SignedUserDto>(`${this.clientUrl}/auth/signin`, signInUserDto).toPromise();
            this.handleAuthentication(signedUserDto);
            return signedUserDto;
        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }

    async register(signUpUserDto: SignUpUserDto): Promise<SignedUpUserDto | undefined> {
        try {
            const signedUpUserDto = await this._http.post<SignedUpUserDto>(`${this.clientUrl}/auth/signup`, signUpUserDto).toPromise();
            this.handleRegister(signedUpUserDto);
            return signedUpUserDto;
        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }

    async resetPassword(userEmail: string): Promise<boolean> {
        try {
            const resetPasswordDto: { userEmail: string } = { userEmail };
            const outputDto = await this._http.post<OutputDto>(`${this.clientUrl}/auth/resetpassword`, resetPasswordDto).toPromise();
            this._notificationService.showApiNotification(outputDto);
            return outputDto?.status === environment.outputStatus?.success;
        } catch (error: any) {
            throw new Error(`API failed: ${error?.message}`);
        }
    }

    async encryptPassword(userPassword: string): Promise<string> {
        return userPassword; //bcrypt.hash(userPassword, bcrypt.genSaltSync(environment.bcryptSalt));
    }

    async encryptText(input: string): Promise<string> {
        return bcrypt.hash(input, bcrypt.genSaltSync(environment.bcryptSalt));
    }


    async compareStatus(input: string, hashedStatus: string | null): Promise<boolean> {
        return hashedStatus ? bcrypt.compare(input, hashedStatus) : false;
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
                localStorage.setItem(environment.storageItems.tokenArmorlockClient, response?.accessToken);
                localStorage.setItem(environment.storageItems.successfulSignIn, await this.encryptText('true'));
                localStorage.setItem(environment.storageItems.singedUserId, await this.encryptText(response?.userId));
                localStorage.setItem(environment.storageItems.singedTime, new Date().toString());
                this.isLoggedInSubject.next(true);
                this._router.navigate([environment.defaultPaths.home]);
            } else {
                localStorage.setItem(environment.storageItems.successfulSignIn, await this.encryptText('false'));
            }
        } else {
            this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Something went wrong, please try again', '', '', undefined);
        }
    }

    private async handleRegister(response: SignedUpUserDto | undefined): Promise<void> {
        if (response) {
            this._notificationService.showApiNotification(response?.output);
            if (response?.output.status === environment.outputStatus?.success) {
                this._router.navigate([environment.defaultPaths.auth]);
            } else {
                this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Something went wrong, please try again', '', '', undefined);
            }
        } else {
            this._notificationService.showBasicNotification(environment.outputStatus.variant.negative, 'Something went wrong', 'Something went wrong, please try again', '', '', undefined);
        }
    }

    async hasFunction(functionCode: any) {
        return true;
    }
}
