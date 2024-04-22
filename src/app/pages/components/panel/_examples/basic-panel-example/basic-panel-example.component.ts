import { Component } from '@angular/core';
import { EmrPanelModule } from 'protrack/components';

@Component({
  selector: 'app-basic-panel-example',
  standalone: true,
  imports: [
    EmrPanelModule
  ],
  templateUrl: './basic-panel-example.component.html',
  styleUrl: './basic-panel-example.component.scss'
})
export class BasicPanelExampleComponent {

}
