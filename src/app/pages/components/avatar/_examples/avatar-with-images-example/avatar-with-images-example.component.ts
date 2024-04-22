import { Component } from '@angular/core';
import { EmrAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-avatar-with-images-example',
  standalone: true,
  imports: [
    EmrAvatarModule
  ],
  templateUrl: './avatar-with-images-example.component.html',
  styleUrl: './avatar-with-images-example.component.scss'
})
export class AvatarWithImagesExampleComponent {

}
