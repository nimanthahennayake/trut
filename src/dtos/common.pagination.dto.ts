// user.dto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';
import { environment } from '../environments/environment';

export class PaginationInputDto {

    @IsNotEmpty()
    @IsNumber()
    page: number = environment.paginationSettings.defaultPage;

    @IsNotEmpty()
    @IsNumber()
    limit: number = environment.paginationSettings.default_limit;

    @IsNotEmpty()
    @IsNumber()
    numberOfRecords: number = environment.paginationSettings.default_limit;
}