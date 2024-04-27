import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor,
    MatSlideToggle,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.scss'
})
export class AccessDeniedComponent {

}
