import { Component } from '@angular/core';
import { TrutSegmentedModule } from 'protrack/components';

@Component({
  selector: 'app-segmented-sizes-example',
  standalone: true,
  imports: [
    TrutSegmentedModule
  ],
  templateUrl: './segmented-sizes-example.component.html',
  styleUrl: './segmented-sizes-example.component.scss'
})
export class SegmentedSizesExampleComponent {

}
