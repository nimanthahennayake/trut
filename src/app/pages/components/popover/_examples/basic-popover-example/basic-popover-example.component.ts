import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { EmrPopoverModule } from 'protrack/components';

@Component({
  selector: 'app-basic-popover-example',
  standalone: true,
  imports: [
    MatButton,
    EmrPopoverModule
  ],
  templateUrl: './basic-popover-example.component.html',
  styleUrl: './basic-popover-example.component.scss'
})
export class BasicPopoverExampleComponent {

}
