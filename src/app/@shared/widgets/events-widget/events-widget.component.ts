import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-events-widget',
  standalone: true,
  imports: [
    TrutAvatarModule
  ],
  templateUrl: './events-widget.component.html',
  styleUrl: './events-widget.component.scss'
})
export class EventsWidgetComponent {

}
