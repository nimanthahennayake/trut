import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInUserDto, SingedUserDto } from '../../dtos/user.signin.dto';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    async signIn(signInUserDto: SignInUserDto) {
        try {
            return await this.http.post<SingedUserDto>(`${this.apiUrl}/users/signin`, signInUserDto).toPromise();
        } catch (error) {
            throw error;
        }
    }
}
