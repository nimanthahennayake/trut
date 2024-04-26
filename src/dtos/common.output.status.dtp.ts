// user.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class OutputDto {

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsString()
    action: string

    @IsNotEmpty()
    @IsString()
    message: string;

    @IsNotEmpty()
    error: boolean;

    error_message: string;
}