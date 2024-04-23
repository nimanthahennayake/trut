import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-today-sales-widget',
  standalone: true,
  imports: [
    TrutAvatarModule,
    MatIcon,
    MatIconButton,
    MatButton
  ],
  templateUrl: './today-sales-widget.component.html',
  styleUrl: './today-sales-widget.component.scss'
})
export class TodaySalesWidgetComponent {

}
