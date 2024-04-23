import { Component } from '@angular/core';
import { TrutAvatarModule } from 'protrack/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { VDividerComponent } from 'protrack/components';

@Component({
  standalone: true,
  imports: [
    TrutAvatarModule,
    MatButton,
    MatIcon,
    VDividerComponent
  ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  dateFormats = [
    'MM/DD/YYYY',
    'DD/MM/YYYY',
    'YYYY-MM-DD'
  ];
  myProfile = {
    firstName: 'Pavel',
    lastName: 'Salauyou',
    username: '@nimantha.hennayake',
    email: 'nimantha.hennayake@example.com',
    jobTitle: 'Team Lead',
    bio: 'Senior Angular Developer',
    phoneNumber: '+1(23)4567890',
    preferences: {
      language: {
        code: 'us',
        name: 'English (United States)'
      },
      dateFormat: 'DD/MM/YYYY',
      automaticTimeZone: {
        name: 'GMT+04:00',
        isEnabled: true
      }
    },
    address: {
      country: 'United Kingdom',
      city: 'London',
      postalCode: 'WC36 4UF',
      street: 'Broadway',
      building: 93,
      apartment: 1
    }
  };
}
