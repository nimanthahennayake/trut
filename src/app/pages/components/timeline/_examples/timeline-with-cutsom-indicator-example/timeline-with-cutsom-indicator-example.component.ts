import { Component } from '@angular/core';
import { TrutTimelineModule } from 'protrack/components';
import { TrutAvatarModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-timeline-with-cutsom-indicator-example',
  standalone: true,
  imports: [
    TrutTimelineModule,
    TrutAvatarModule,
    MatIcon
  ],
  templateUrl: './timeline-with-cutsom-indicator-example.component.html',
  styleUrl: './timeline-with-cutsom-indicator-example.component.scss'
})
export class TimelineWithCutsomIndicatorExampleComponent {

}
