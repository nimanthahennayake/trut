// user.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { OutputDto } from './common.output.status.dto';
import { PaginationInputDto } from './common.pagination.dto';
import { TableHeadersDto } from './common.table.headers.dto';
import SecurityUserEntity from 'src/orm.entities/security/security.user.entity';

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
    users: SecurityUserEntity[] | undefined;

    @IsNotEmpty()
    paginationOutput: PaginationInputDto;

    @IsNotEmpty()
    output: OutputDto;
}
