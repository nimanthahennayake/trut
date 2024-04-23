import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TrutPopoverModule } from 'protrack/components';

@Component({
  selector: 'app-basic-popover-example',
  standalone: true,
  imports: [
    MatButton,
    TrutPopoverModule
  ],
  templateUrl: './basic-popover-example.component.html',
  styleUrl: './basic-popover-example.component.scss'
})
export class BasicPopoverExampleComponent {

}
