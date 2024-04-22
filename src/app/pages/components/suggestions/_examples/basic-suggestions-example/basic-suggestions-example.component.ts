import { Component } from '@angular/core';
import { EmrAvatarModule } from 'protrack/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SuggestionBlockComponent } from 'protrack/components';
import { SuggestionComponent } from 'protrack/components';
import { SuggestionIconDirective } from 'protrack/components';
import { SuggestionThumbDirective } from 'protrack/components';
import { SuggestionsComponent } from 'protrack/components';

@Component({
  selector: 'app-basic-suggestions-example',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatButton,
    MatIcon,
    SuggestionBlockComponent,
    SuggestionComponent,
    SuggestionIconDirective,
    SuggestionThumbDirective,
    SuggestionsComponent
  ],
  templateUrl: './basic-suggestions-example.component.html',
  styleUrl: './basic-suggestions-example.component.scss'
})
export class BasicSuggestionsExampleComponent {

}
