import { Component } from '@angular/core';
import { EmrAlertModule } from 'protrack/components';

@Component({
  selector: 'app-alert-variants-example',
  standalone: true,
  imports: [
    EmrAlertModule
  ],
  templateUrl: './alert-variants-example.component.html',
  styleUrl: './alert-variants-example.component.scss'
})
export class AlertVariantsExampleComponent {

}
