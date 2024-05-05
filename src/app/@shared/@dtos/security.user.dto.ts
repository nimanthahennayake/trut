import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class SecurityUser {

    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsString()
    user_name: string;

    @IsNotEmpty()
    @IsString()
    user_unique_code: string;

    @IsNotEmpty()
    @IsString()
    user_email: string;

    @IsNotEmpty()
    @IsNumber()
    user_role_id: number;

    @IsNotEmpty()
    @IsString()
    user_password: string;

    @IsNotEmpty()
    @IsDate()
    user_password_expiry_date: Date;

    @IsNotEmpty()
    @IsDate()
    user_last_login: Date;

    @IsNotEmpty()
    @IsNumber()
    user_status: number;

    @IsNotEmpty()
    @IsDate()
    user_created_date: Date;

    @IsNotEmpty()
    @IsString()
    user_last_modified_by: string;

    @IsNotEmpty()
    @IsDate()
    user_last_modified_date: Date;
}  