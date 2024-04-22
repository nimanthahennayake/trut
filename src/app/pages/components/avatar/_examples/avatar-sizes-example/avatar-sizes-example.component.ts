import { Component } from '@angular/core';
import { EmrAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-avatar-sizes-example',
  standalone: true,
  imports: [
    EmrAvatarModule
  ],
  templateUrl: './avatar-sizes-example.component.html',
  styleUrl: './avatar-sizes-example.component.scss'
})
export class AvatarSizesExampleComponent {

}
