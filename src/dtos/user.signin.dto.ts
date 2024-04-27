// user.dto.ts
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { OutputDto } from './common.output.status.dtp';

export class SignInUserDto {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    user_email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    user_password: string;
}

export class SignedUserDto {
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsString()
    access_token: string;

    @IsNotEmpty()
    @IsString()
    output: OutputDto;
}
