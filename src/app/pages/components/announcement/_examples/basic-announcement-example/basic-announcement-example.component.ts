import { Component } from '@angular/core';
import { TrutAnnouncementModule } from 'protrack/components';

@Component({
  selector: 'app-basic-announcement-example',
  standalone: true,
  imports: [
    TrutAnnouncementModule
  ],
  templateUrl: './basic-announcement-example.component.html',
  styleUrl: './basic-announcement-example.component.scss'
})
export class BasicAnnouncementExampleComponent {

}
