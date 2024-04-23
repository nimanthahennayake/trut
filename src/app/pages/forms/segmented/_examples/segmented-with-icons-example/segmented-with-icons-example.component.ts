import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TrutSegmentedModule } from 'protrack/components';

@Component({
  selector: 'app-segmented-with-icons-example',
  standalone: true,
  imports: [
    MatIcon,
    TrutSegmentedModule
  ],
  templateUrl: './segmented-with-icons-example.component.html',
  styleUrl: './segmented-with-icons-example.component.scss'
})
export class SegmentedWithIconsExampleComponent {

}
