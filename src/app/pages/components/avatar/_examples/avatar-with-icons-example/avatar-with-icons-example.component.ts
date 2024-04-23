import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-avatar-with-icons-example',
  standalone: true,
  imports: [
    TrutAvatarModule,
    MatIcon
  ],
  templateUrl: './avatar-with-icons-example.component.html',
  styleUrl: './avatar-with-icons-example.component.scss'
})
export class AvatarWithIconsExampleComponent {

}
