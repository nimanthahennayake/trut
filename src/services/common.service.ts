import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})

export class CommonService {
    transformValue(value: string, type: string): string {
        if (type == "date") {
            const dateFormat = 'yyyy-MM-dd HH:mm:ss';
            value = <string>new Date(value).toLocaleString('en-US', { hour12: false });
        }
        return value;
    }
}
