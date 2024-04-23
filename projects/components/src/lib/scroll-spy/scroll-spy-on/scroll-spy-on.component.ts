import { Component, ElementRef, HostListener, inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollSpyNavComponent } from '../scroll-spy-nav/scroll-spy-nav.component';
import { SCROLL_SPY_NAV } from '../types';

@Component({
  selector: 'trut-scroll-spy-on,[trut-scroll-spy-on]',
  exportAs: 'emrScrollSpyOn',
  templateUrl: './scroll-spy-on.component.html',
  styleUrl: './scroll-spy-on.component.scss',
  host: {
    'class': 'trut-scroll-spy-on',
    '[class.is-active]': 'isActive'
  }
})
export class ScrollSpyOnComponent implements OnInit {
  private _parent = inject<ScrollSpyNavComponent>(SCROLL_SPY_NAV);
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  private _document = inject(DOCUMENT);

  @Input()
  targetId: string;

  get isActive() {
    return this.targetId === this._parent.activeId;
  }

  ngOnInit() {
    const fullUrl = this._document.location.origin + this._document.location.pathname;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'href', fullUrl + '#' + this.targetId);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._parent.scrollTo(this.targetId);
  }
}
