import { Component } from '@angular/core';
import { EmrTimelineModule } from 'protrack/components';
import { EmrAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-basic-timeline-example',
  standalone: true,
  imports: [
    EmrTimelineModule,
    EmrAvatarModule
  ],
  templateUrl: './basic-timeline-example.component.html',
  styleUrl: './basic-timeline-example.component.scss'
})
export class BasicTimelineExampleComponent {

}
