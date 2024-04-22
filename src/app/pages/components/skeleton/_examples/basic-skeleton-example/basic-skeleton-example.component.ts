import { Component } from '@angular/core';
import { EmrSkeletonModule } from 'protrack/components';

@Component({
  selector: 'app-basic-skeleton-example',
  standalone: true,
  imports: [
    EmrSkeletonModule
  ],
  templateUrl: './basic-skeleton-example.component.html',
  styleUrl: './basic-skeleton-example.component.scss'
})
export class BasicSkeletonExampleComponent {

}
