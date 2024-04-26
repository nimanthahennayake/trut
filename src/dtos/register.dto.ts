// user.dto.ts
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { OutputDto } from './common.output.status.dtp';

export class RegisterUserDto {

    @IsNotEmpty()
    @IsString()
    user_name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @IsEmail()
    user_email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    user_password: string;
}

export class RegisteredUserDto {
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsString()
    output: OutputDto;
}
