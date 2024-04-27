import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SessionManagerService {
    private destroy$ = new Subject<void>();

    constructor(private router: Router) { }

    startSessionTimeout(inactivityPeriod: number): void {
        timer(inactivityPeriod)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.router.navigate(['/login']);
            });
    }

    resetSessionTimeout(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this.destroy$ = new Subject<void>();
    }
}
