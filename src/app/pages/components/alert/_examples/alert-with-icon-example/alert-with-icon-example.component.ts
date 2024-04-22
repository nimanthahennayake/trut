import { Component } from '@angular/core';
import { EmrAlertModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-alert-with-icon-example',
  standalone: true,
  imports: [
    EmrAlertModule,
    MatIcon
  ],
  templateUrl: './alert-with-icon-example.component.html',
  styleUrl: './alert-with-icon-example.component.scss'
})
export class AlertWithIconExampleComponent {

}
