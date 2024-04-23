import { Component } from '@angular/core';
import { TrutAlertModule } from 'protrack/components';

@Component({
  selector: 'app-alert-with-title-example',
  standalone: true,
  imports: [
    TrutAlertModule
  ],
  templateUrl: './alert-with-title-example.component.html',
  styleUrl: './alert-with-title-example.component.scss'
})
export class AlertWithTitleExampleComponent {

}
