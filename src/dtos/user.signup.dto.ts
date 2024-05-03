// user.dto.ts
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { OutputDto } from './common.output.status.dtp';

export class SignUpUserDto {

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @IsEmail()
    userEmail: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    userPassword: string;
}

export class SignedUpUserDto {
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    output: OutputDto;
}
