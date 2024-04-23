import { Component } from '@angular/core';
import { TrutContentFadeModule } from 'protrack/components';

@Component({
  selector: 'app-basic-content-fade-example',
  standalone: true,
  imports: [
    TrutContentFadeModule
  ],
  templateUrl: './basic-content-fade-example.component.html',
  styleUrl: './basic-content-fade-example.component.scss'
})
export class BasicContentFadeExampleComponent {

}
