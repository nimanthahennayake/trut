import { Component } from '@angular/core';
import { TrutTabPanelModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';
import { TrutPanelModule } from 'protrack/components';

@Component({
  selector: 'app-tab-panel-with-panels-inside-example',
  standalone: true,
  imports: [
    TrutTabPanelModule,
    MatIcon,
    TrutPanelModule
  ],
  templateUrl: './tab-panel-with-panels-inside-example.component.html',
  styleUrl: './tab-panel-with-panels-inside-example.component.scss'
})
export class TabPanelWithPanelsInsideExampleComponent {

}
