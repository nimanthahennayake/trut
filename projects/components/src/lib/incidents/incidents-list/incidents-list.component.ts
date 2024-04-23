import { Component, HostListener, inject } from '@angular/core';
import { IncidentsComponent } from '../incidents/incidents.component';
import { INCIDENTS } from '../properties';

@Component({
  selector: 'trut-incidents-list',
  exportAs: 'trut-incidents-list',
  templateUrl: './incidents-list.component.html',
  styleUrls: ['./incidents-list.component.css'],
  host: {
    'class': 'trut-incidents-list'
  }
})
export class IncidentsListComponent {
  private _parent = inject<IncidentsComponent>(INCIDENTS, { optional: true });

  @HostListener('click', ['$event'])
  private _handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.closest('.trut-incident') === null) {
      this._parent?.toggleVisibility();
    }
  }
}
