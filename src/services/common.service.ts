import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';
        const datePipe = new DatePipe('en-US');
        const formattedDate = datePipe.transform(value, 'yyyy-MM-dd HH:mm:ss');
        return formattedDate || '';
    }
}
