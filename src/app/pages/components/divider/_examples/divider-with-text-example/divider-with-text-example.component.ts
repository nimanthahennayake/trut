import { Component } from '@angular/core';
import { EmrDividerModule } from 'protrack/components';

@Component({
  selector: 'app-divider-with-text-example',
  standalone: true,
  imports: [
    EmrDividerModule
  ],
  templateUrl: './divider-with-text-example.component.html',
  styleUrl: './divider-with-text-example.component.scss'
})
export class DividerWithTextExampleComponent {

}
