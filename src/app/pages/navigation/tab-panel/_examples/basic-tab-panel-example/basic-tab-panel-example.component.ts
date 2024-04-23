import { Component } from '@angular/core';
import { TrutTabPanelModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-basic-tab-panel-example',
  standalone: true,
  imports: [
    TrutTabPanelModule,
    MatIcon
  ],
  templateUrl: './basic-tab-panel-example.component.html',
  styleUrl: './basic-tab-panel-example.component.scss'
})
export class BasicTabPanelExampleComponent {

}
