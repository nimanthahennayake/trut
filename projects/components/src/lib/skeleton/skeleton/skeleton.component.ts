import { Component, input } from '@angular/core';

@Component({
  selector: 'trut-skeleton',
  exportAs: 'emrSkeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
  host: {
    'class': 'trut-skeleton',
    '[class.is-direction-row]': 'direction() === "row"',
    '[class.is-direction-col]': 'direction() === "col"',
  }
})
export class SkeletonComponent {
  direction = input<'row' | 'col'>('row');
}
