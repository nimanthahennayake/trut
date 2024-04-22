import { Component } from '@angular/core';
import { EmrAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-events-widget',
  standalone: true,
  imports: [
    EmrAvatarModule
  ],
  templateUrl: './events-widget.component.html',
  styleUrl: './events-widget.component.scss'
})
export class EventsWidgetComponent {

}
