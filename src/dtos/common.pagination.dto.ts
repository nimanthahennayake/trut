// user.dto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';
import { environment } from '../environments/environment';

export class PaginationInputDto {

    @IsNotEmpty()
    @IsNumber()
    page: number = environment.paginationSettings.defaultPage;

    @IsNotEmpty()
    @IsNumber()
    limit: number = environment.paginationSettings.defaultLimit;

    @IsNotEmpty()
    @IsNumber()
    numberOfRecords: number = environment.paginationSettings.defaultLimit;
}