import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';


@Injectable({
    providedIn: 'root',
})

export class CommonService {
    constructor(private _datePipe: DatePipe) { }

    async transformValue(value: string, type: string): Promise<string> {
        if (type == "date") {
            value = <string>this._datePipe.transform(value, 'yyyy-MM-dd HH:mm:ss');
        }
        return value;
    }
}
