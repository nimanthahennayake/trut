import {
  Component
} from '@angular/core';

@Component({
  selector: 'trut-navigation-group',
  exportAs: 'trutNavigationGroup',
  templateUrl: './navigation-group.component.html',
  styleUrls: ['./navigation-group.component.css'],
  host: {
    class: 'trut-navigation-group'
  }
})
export class NavigationGroupComponent {
}
