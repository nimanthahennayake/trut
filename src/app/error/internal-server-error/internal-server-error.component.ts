import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-internal-server-error',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor,
    MatSlideToggle,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './internal-server-error.component.html',
  styleUrl: './internal-server-error.component.scss'
})
export class InternalServerErrorComponent {

}
