import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';

@Component({
  selector: 'app-basic-avatar-example',
  standalone: true,
  imports: [
    TrutAvatarModule
  ],
  templateUrl: './basic-avatar-example.component.html',
  styleUrl: './basic-avatar-example.component.scss'
})
export class BasicAvatarExampleComponent {

}
