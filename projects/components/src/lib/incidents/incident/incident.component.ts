import { Component } from '@angular/core';

@Component({
  selector: 'trut-incident,[trut-incident]',
  exportAs: 'trutIncident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  host: {
    'class': 'trut-incident'
  }
})
export class IncidentComponent {
}
