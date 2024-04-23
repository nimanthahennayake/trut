import { Component } from '@angular/core';
import { TrutAlertModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-alert-with-icon-example',
  standalone: true,
  imports: [
    TrutAlertModule,
    MatIcon
  ],
  templateUrl: './alert-with-icon-example.component.html',
  styleUrl: './alert-with-icon-example.component.scss'
})
export class AlertWithIconExampleComponent {

}
