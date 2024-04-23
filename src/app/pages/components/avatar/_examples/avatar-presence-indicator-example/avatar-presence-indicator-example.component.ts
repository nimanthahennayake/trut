import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-avatar-presence-indicator-example',
  standalone: true,
  imports: [
    TrutAvatarModule
  ],
  templateUrl: './avatar-presence-indicator-example.component.html',
  styleUrl: './avatar-presence-indicator-example.component.scss'
})
export class AvatarPresenceIndicatorExampleComponent {

}
