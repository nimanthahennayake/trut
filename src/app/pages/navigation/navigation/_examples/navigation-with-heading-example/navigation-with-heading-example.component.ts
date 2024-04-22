import { Component } from '@angular/core';
import { EmrNavigationModule } from 'protrack/components';

@Component({
  selector: 'app-navigation-with-heading-example',
  standalone: true,
  imports: [
    EmrNavigationModule
  ],
  templateUrl: './navigation-with-heading-example.component.html',
  styleUrl: './navigation-with-heading-example.component.scss'
})
export class NavigationWithHeadingExampleComponent {

}
