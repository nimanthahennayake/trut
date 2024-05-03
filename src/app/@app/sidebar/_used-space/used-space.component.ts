import { Component } from '@angular/core';
import { TrutGaugeModule } from 'trut/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-used-space',
  standalone: true,
  imports: [
    TrutGaugeModule,
    MatIcon
  ],
  templateUrl: './used-space.component.html',
  styleUrl: './used-space.component.scss'
})
export class UsedSpaceComponent {

}
