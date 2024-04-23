import {
  Component
} from '@angular/core';

@Component({
  selector: 'trut-navigation-group',
  exportAs: 'emrNavigationGroup',
  templateUrl: './navigation-group.component.html',
  styleUrls: ['./navigation-group.component.css'],
  host: {
    class: 'trut-navigation-group'
  }
})
export class NavigationGroupComponent {
}
