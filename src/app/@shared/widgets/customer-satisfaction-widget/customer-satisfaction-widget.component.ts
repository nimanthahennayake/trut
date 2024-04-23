import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-customer-satisfaction-widget',
  standalone: true,
  imports: [
    TrutAvatarModule,
    MatIcon
  ],
  templateUrl: './customer-satisfaction-widget.component.html',
  styleUrl: './customer-satisfaction-widget.component.scss'
})
export class CustomerSatisfactionWidgetComponent {

}
