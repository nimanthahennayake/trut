import { Component } from '@angular/core';
import { TrutTimelineModule } from 'protrack/components';
import { TrutAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-timeline-timestamp-example',
  standalone: true,
  imports: [
    TrutTimelineModule,
    TrutAvatarModule
  ],
  templateUrl: './timeline-timestamp-example.component.html',
  styleUrl: './timeline-timestamp-example.component.scss'
})
export class TimelineTimestampExampleComponent {

}
