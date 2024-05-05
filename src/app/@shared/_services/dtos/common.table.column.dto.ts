// user.dto.ts
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TableColumnDto {

    @IsNotEmpty()
    @IsString()
    columnDatafieldName: string;

    @IsNotEmpty()
    @IsString()
    columnHeaderName: string;

    @IsNotEmpty()
    @IsString()
    columnDataType: string;

    @IsNotEmpty()
    @IsBoolean()
    columnFilterable: boolean;

    @IsNotEmpty()
    @IsBoolean()
    columnVisible: boolean;

    @IsNotEmpty()
    @IsBoolean()
    columnIsSortble: boolean;

    @IsNotEmpty()
    @IsBoolean()
    sticky: boolean;

    @IsNotEmpty()
    @IsBoolean()
    stickyEnd: boolean;

    @IsNotEmpty()
    @IsBoolean()
    actionColumn: boolean;
}