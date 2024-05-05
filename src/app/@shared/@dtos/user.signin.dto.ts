// user.dto.ts
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { OutputDto } from './common.output.status.dtp';

export class SignInUserDto {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    userEmail: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    userPassword: string;
}

export class SignedUserDto {
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    accessToken: string;

    @IsNotEmpty()
    @IsString()
    output: OutputDto;
}
