import { Component } from '@angular/core';
import { TrutAlertModule } from 'protrack/components';

@Component({
  selector: 'app-alert-with-border-example',
  standalone: true,
  imports: [
    TrutAlertModule
  ],
  templateUrl: './alert-with-border-example.component.html',
  styleUrl: './alert-with-border-example.component.scss'
})
export class AlertWithBorderExampleComponent {

}
