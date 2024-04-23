import { Component } from '@angular/core';
import { TrutAnnouncementModule } from 'protrack/components';

@Component({
  selector: 'app-announcement-with-icons-example',
  standalone: true,
  imports: [
    TrutAnnouncementModule
  ],
  templateUrl: './announcement-with-icons-example.component.html',
  styleUrl: './announcement-with-icons-example.component.scss'
})
export class AnnouncementWithIconsExampleComponent {

}
