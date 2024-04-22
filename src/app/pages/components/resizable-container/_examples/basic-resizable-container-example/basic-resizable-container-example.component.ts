import { Component } from '@angular/core';
import { EmrResizableContainerModule } from 'protrack/components';

@Component({
  selector: 'app-basic-resizable-container-example',
  standalone: true,
  imports: [
    EmrResizableContainerModule
  ],
  templateUrl: './basic-resizable-container-example.component.html',
  styleUrl: './basic-resizable-container-example.component.scss'
})
export class BasicResizableContainerExampleComponent {

}
