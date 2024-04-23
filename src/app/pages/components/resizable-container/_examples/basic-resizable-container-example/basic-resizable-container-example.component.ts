import { Component } from '@angular/core';
import { TrutResizableContainerModule } from 'protrack/components';

@Component({
  selector: 'app-basic-resizable-container-example',
  standalone: true,
  imports: [
    TrutResizableContainerModule
  ],
  templateUrl: './basic-resizable-container-example.component.html',
  styleUrl: './basic-resizable-container-example.component.scss'
})
export class BasicResizableContainerExampleComponent {

}
