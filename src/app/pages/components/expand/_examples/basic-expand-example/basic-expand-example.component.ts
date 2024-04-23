import { Component } from '@angular/core';
import { TrutExpandModule } from 'protrack/components';

@Component({
  selector: 'app-basic-expand-example',
  standalone: true,
  imports: [
    TrutExpandModule
  ],
  templateUrl: './basic-expand-example.component.html',
  styleUrl: './basic-expand-example.component.scss'
})
export class BasicExpandExampleComponent {
  expanded = false;
}
