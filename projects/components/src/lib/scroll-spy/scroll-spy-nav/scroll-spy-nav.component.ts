import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren, DestroyRef,
  inject,
  NgZone,
  PLATFORM_ID,
  QueryList
} from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SCROLL_SPY_NAV } from '../types';
import { ScrollSpyOnComponent } from '../scroll-spy-on/scroll-spy-on.component';

@Component({
  selector: 'trut-scroll-spy-nav,[trut-scroll-spy-nav]',
  exportAs: 'trutScrollSpyNav',
  templateUrl: './scroll-spy-nav.component.html',
  styleUrl: './scroll-spy-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SCROLL_SPY_NAV,
      useExisting: ScrollSpyNavComponent
    }
  ],
  host: {
    'class': 'trut-scroll-spy-nav'
  }
})
export class ScrollSpyNavComponent implements AfterContentInit {
  private _document = inject(DOCUMENT);
  private _cdr = inject(ChangeDetectorRef);
  private _platformId = inject(PLATFORM_ID);
  private _zone = inject(NgZone);
  private _threshold = 10;
  private _destroyRef = inject(DestroyRef);

  @ContentChildren(ScrollSpyOnComponent)
  private _items: QueryList<any>;

  activeId: string;

  private _elementToScroll: HTMLElement;

  ngAfterContentInit() {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    this._elementToScroll = this._document.querySelector('.trut-layout-body:has(:not(.trut-layout-body))') as HTMLElement;

    if (this._elementToScroll) {
      this._zone.runOutsideAngular(() => {
        fromEvent(this._elementToScroll, 'scroll')
          .pipe(
            debounceTime(35),
            takeUntilDestroyed(this._destroyRef)
          )
          .subscribe(() => {
            this._findActiveItem();
          })
        ;
      });
      // start finding active item after layout body will be scrolled to top
      setTimeout(() => {
        this._findActiveItem();
      }, 10);
    }
  }

  scrollTo(targetId: string) {
    if (!this._elementToScroll) {
      return;
    }

    this.activeId = targetId;
    const targetElement = this._document.querySelector('#' + targetId) as HTMLElement;
    const offsetTopFix = parseInt(getComputedStyle(targetElement).marginTop) +
      parseInt(getComputedStyle(targetElement).height) + this._threshold
    ;
    this._cdr.detectChanges();
    this._elementToScroll.scroll({
      top: targetElement.offsetTop - offsetTopFix,
      left: 0,
      behavior: 'smooth'
    });
  }

  private _findActiveItem() {
    for (let item of this._items) {
      const targetElement = this._document.querySelector('#' + item.targetId) as HTMLElement;

      if (targetElement) {
        if (this._elementIsVisibleInViewport(this._elementToScroll, targetElement)) {
          if (this.activeId === item.targetId) {
            return;
          }

          this._zone.run(() => {
            this.activeId = item.targetId;
            this._cdr.detectChanges();
          });
          break;
        }
      }
    }
  }

  private _elementIsVisibleInViewport(container: HTMLElement, targetEl: HTMLElement, partiallyVisible = false) {
    const { top, left, bottom, right } = targetEl.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const innerWidth = containerRect.width;
    const innerHeight = containerRect.height;

    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
    ;
  }
}
