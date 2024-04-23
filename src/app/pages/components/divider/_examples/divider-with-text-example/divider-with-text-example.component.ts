import { Component } from '@angular/core';
import { TrutDividerModule } from 'protrack/components';

@Component({
  selector: 'app-divider-with-text-example',
  standalone: true,
  imports: [
    TrutDividerModule
  ],
  templateUrl: './divider-with-text-example.component.html',
  styleUrl: './divider-with-text-example.component.scss'
})
export class DividerWithTextExampleComponent {

}
