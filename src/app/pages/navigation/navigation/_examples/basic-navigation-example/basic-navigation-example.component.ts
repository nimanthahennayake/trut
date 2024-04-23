import { Component } from '@angular/core';
import { TrutNavigationModule } from 'protrack/components';

@Component({
  selector: 'app-basic-navigation-example',
  standalone: true,
  imports: [
    TrutNavigationModule
  ],
  templateUrl: './basic-navigation-example.component.html',
  styleUrl: './basic-navigation-example.component.scss'
})
export class BasicNavigationExampleComponent {

}
