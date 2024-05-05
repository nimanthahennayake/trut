// user.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class FilterOperatorDto {

    @IsNotEmpty()
    @IsString()
    logicalOperator: string;

    @IsNotEmpty()
    @IsString()
    value: any[];
}