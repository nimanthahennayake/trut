import { Component } from '@angular/core';
import { TrutSkeletonModule } from 'protrack/components';

@Component({
  selector: 'app-basic-skeleton-example',
  standalone: true,
  imports: [
    TrutSkeletonModule
  ],
  templateUrl: './basic-skeleton-example.component.html',
  styleUrl: './basic-skeleton-example.component.scss'
})
export class BasicSkeletonExampleComponent {

}
