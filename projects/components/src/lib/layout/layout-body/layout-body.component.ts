import { booleanAttribute, Component, ElementRef, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'trut-layout-body',
  exportAs: 'trutLayoutBody',
  standalone: true,
  imports: [],
  templateUrl: './layout-body.component.html',
  styleUrl: './layout-body.component.scss',
  host: {
    'class': 'trut-layout-body trut-scroll-lg'
  }
})
export class LayoutBodyComponent implements OnInit {
  private _router = inject(Router);
  private _elementRef = inject(ElementRef);
  private _platformId = inject(PLATFORM_ID);

  @Input({ transform: booleanAttribute })
  autoscrollToTop = true;

  ngOnInit() {
    // Scroll a page to top if url changed
    this._router.events
      .pipe(
        filter(event=> event instanceof NavigationStart)
      )
      .subscribe(() => {
        if (!this.autoscrollToTop) {
          return;
        }

        if (isPlatformServer(this._platformId)) {
          return;
        }

        this._elementRef.nativeElement.scrollTo({
          top: 0,
          left: 0
        });
      })
    ;
  }
}
