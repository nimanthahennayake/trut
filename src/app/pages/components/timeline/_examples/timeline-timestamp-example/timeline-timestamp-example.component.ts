import { Component } from '@angular/core';
import { EmrTimelineModule } from 'protrack/components';
import { EmrAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-timeline-timestamp-example',
  standalone: true,
  imports: [
    EmrTimelineModule,
    EmrAvatarModule
  ],
  templateUrl: './timeline-timestamp-example.component.html',
  styleUrl: './timeline-timestamp-example.component.scss'
})
export class TimelineTimestampExampleComponent {

}
