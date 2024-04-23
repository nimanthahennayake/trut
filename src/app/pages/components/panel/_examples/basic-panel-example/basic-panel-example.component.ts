import { Component } from '@angular/core';
import { TrutPanelModule } from 'protrack/components';

@Component({
  selector: 'app-basic-panel-example',
  standalone: true,
  imports: [
    TrutPanelModule
  ],
  templateUrl: './basic-panel-example.component.html',
  styleUrl: './basic-panel-example.component.scss'
})
export class BasicPanelExampleComponent {

}
