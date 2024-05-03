import { PaginationInputDto } from "../../dtos/common.pagination.dto";

export interface SignInUserDetails {

    userEmail: string;

    userPassword: string;

}

export interface GetUserDetails {

    pagination: PaginationInputDto;

    searchTerm: string;

    filterCriteria: any;

}