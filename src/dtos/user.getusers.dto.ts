// user.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { OutputDto } from './common.output.status.dtp';
import { PaginationInputDto } from './common.pagination.dto';
import { TableHeadersDto } from './common.table.headers.dto';
import SecurityUser from './security.user.dto';

export class GetUsersInputDto {

    @IsNotEmpty()
    paginationInput: PaginationInputDto;

    @IsNotEmpty()
    @IsString()
    searchTerm: string;

    @IsNotEmpty()
    filterCriteria: any;
}

export class GetUsersOutputDto {
    @IsNotEmpty()
    tableHeaders: TableHeadersDto | undefined;

    @IsNotEmpty()
    users: SecurityUser[] | undefined;

    @IsNotEmpty()
    paginationOutput: PaginationInputDto;

    @IsNotEmpty()
    output: OutputDto;
}
