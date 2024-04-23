import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-team-widget',
  standalone: true,
  imports: [
    TrutAvatarModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './team-widget.component.html',
  styleUrl: './team-widget.component.scss'
})
export class TeamWidgetComponent {

}
