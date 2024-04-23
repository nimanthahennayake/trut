import { Component } from '@angular/core';
import { TrutAlertModule } from 'protrack/components';

@Component({
  selector: 'app-basic-alert-example',
  standalone: true,
  imports: [
    TrutAlertModule
  ],
  templateUrl: './basic-alert-example.component.html',
  styleUrl: './basic-alert-example.component.scss'
})
export class BasicAlertExampleComponent {
}
