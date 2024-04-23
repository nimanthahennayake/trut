import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-avatar-with-images-example',
  standalone: true,
  imports: [
    TrutAvatarModule
  ],
  templateUrl: './avatar-with-images-example.component.html',
  styleUrl: './avatar-with-images-example.component.scss'
})
export class AvatarWithImagesExampleComponent {

}
