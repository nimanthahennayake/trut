import {
  Component, Input, numberAttribute
} from '@angular/core';

@Component({
  selector: 'trut-avatar-group',
  exportAs: 'trutAvatarGroup',
  styleUrls: ['./avatar-group.component.scss'],
  templateUrl: './avatar-group.component.html',
  host: {
    class: 'trut-avatar-group'
  }
})
export class AvatarGroupComponent {
}
