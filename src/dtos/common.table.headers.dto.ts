// user.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { TableColumnDto } from './common.table.column.dto';

export class TableHeadersDto {

    @IsNotEmpty()
    columns: TableColumnDto[];

    @IsNotEmpty()
    @IsString()
    tableTitle: string;

    @IsNotEmpty()
    @IsString()
    tableDescription: string;
}