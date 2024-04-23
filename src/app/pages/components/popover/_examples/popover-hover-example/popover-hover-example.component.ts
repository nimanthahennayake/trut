import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TrutPopoverModule } from 'protrack/components';

@Component({
  selector: 'app-popover-hover-example',
  standalone: true,
  imports: [
    MatButton,
    TrutPopoverModule
  ],
  templateUrl: './popover-hover-example.component.html',
  styleUrl: './popover-hover-example.component.scss'
})
export class PopoverHoverExampleComponent {

}
