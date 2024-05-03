import { Component } from '@angular/core';
import { TrutAvatarModule } from 'trut/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { TrutDividerModule } from 'trut/components';

@Component({
  standalone: true,
  imports: [
    TrutAvatarModule,
    MatButton,
    MatIcon,
    MatSlideToggle,
    FormsModule,
    TrutDividerModule
  ],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  securityProfile = {
    email: 'nimantha.hennayake@gmail.com',
    isEmailVerified: false,
    mfaConfigured: false,
    mfaEnabled: false
  };

  setup2stepVerification() {
    this.securityProfile.mfaConfigured = true;
    this.securityProfile.mfaEnabled = true;
  }
}
