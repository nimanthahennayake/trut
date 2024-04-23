import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-avatar-sizes-example',
  standalone: true,
  imports: [
    TrutAvatarModule
  ],
  templateUrl: './avatar-sizes-example.component.html',
  styleUrl: './avatar-sizes-example.component.scss'
})
export class AvatarSizesExampleComponent {

}
