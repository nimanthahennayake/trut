import { Component } from '@angular/core';

@Component({
  selector: 'trut-skeleton-block',
  exportAs: 'trutSkeletonBlock',
  template: '',
  styleUrls: ['./skeleton-block.component.css'],
  host: {
    'class': 'trut-skeleton-item trut-skeleton-block'
  }
})
export class SkeletonBlockComponent {
}
