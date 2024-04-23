import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'trut-suggestion,[trut-suggestion]',
  exportAs: 'trutSuggestion',
  standalone: true,
  imports: [],
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.scss',
  hostDirectives: [
    MatRipple
  ]
})
export class SuggestionComponent {

}
