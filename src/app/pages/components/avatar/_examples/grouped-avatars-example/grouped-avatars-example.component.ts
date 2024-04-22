import { Component } from '@angular/core';
import { EmrAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-grouped-avatars-example',
  standalone: true,
  imports: [
    EmrAvatarModule
  ],
  templateUrl: './grouped-avatars-example.component.html',
  styleUrl: './grouped-avatars-example.component.scss'
})
export class GroupedAvatarsExampleComponent {

}
