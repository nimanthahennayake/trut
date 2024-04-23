import { Component } from '@angular/core';
import { TrutTimelineModule } from 'protrack/components';
import { TrutAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-basic-timeline-example',
  standalone: true,
  imports: [
    TrutTimelineModule,
    TrutAvatarModule
  ],
  templateUrl: './basic-timeline-example.component.html',
  styleUrl: './basic-timeline-example.component.scss'
})
export class BasicTimelineExampleComponent {

}
