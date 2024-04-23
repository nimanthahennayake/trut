import { Component } from '@angular/core';
import { TrutSegmentedModule } from 'protrack/components';

@Component({
  selector: 'app-basic-segmented-example',
  standalone: true,
  imports: [
    TrutSegmentedModule
  ],
  templateUrl: './basic-segmented-example.component.html',
  styleUrl: './basic-segmented-example.component.scss'
})
export class BasicSegmentedExampleComponent {

}
