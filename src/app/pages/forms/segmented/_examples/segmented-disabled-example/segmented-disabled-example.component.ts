import { Component } from '@angular/core';
import { TrutSegmentedModule } from 'protrack/components';

@Component({
  selector: 'app-segmented-disabled-example',
  standalone: true,
  imports: [
    TrutSegmentedModule
  ],
  templateUrl: './segmented-disabled-example.component.html',
  styleUrl: './segmented-disabled-example.component.scss'
})
export class SegmentedDisabledExampleComponent {

}
