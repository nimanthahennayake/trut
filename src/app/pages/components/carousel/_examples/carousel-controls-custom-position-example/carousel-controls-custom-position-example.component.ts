import { Component } from '@angular/core';
import { CarouselCardComponent } from 'protrack/components';
import { CarouselComponent } from 'protrack/components';
import { CarouselNextDirective } from 'protrack/components';
import { CarouselPreviousDirective } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-carousel-controls-custom-position-example',
  standalone: true,
  imports: [
    CarouselCardComponent,
    CarouselComponent,
    CarouselNextDirective,
    CarouselPreviousDirective,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './carousel-controls-custom-position-example.component.html',
  styleUrl: './carousel-controls-custom-position-example.component.scss'
})
export class CarouselControlsCustomPositionExampleComponent {

}
