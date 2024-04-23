import { Component } from '@angular/core';
import { TrutNavigationModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-with-nested-menu-example',
  standalone: true,
  imports: [
    TrutNavigationModule,
    MatIcon
  ],
  templateUrl: './navigation-with-nested-menu-example.component.html',
  styleUrl: './navigation-with-nested-menu-example.component.scss'
})
export class NavigationWithNestedMenuExampleComponent {

}
