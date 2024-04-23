import { Component, inject, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatBadge } from '@angular/material/badge';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { TrutAvatarModule, IconComponent } from 'protrack/components';
import { NotificationListComponent } from '@app/header/_notifications/notification-list/notification-list.component';
import { TrutPopoverModule } from 'protrack/components';
import { AssistantSearchComponent } from '@app/header/_assistant-search/assistant-search.component';
import { ThemeManagerService } from '@services/theme-manager.service';
import { LayoutApiService } from 'protrack/components';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    AsyncPipe,
    MatFormField,
    MatInput,
    MatPrefix,
    MatBadge,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    TrutAvatarModule,
    MatDivider,
    MatButton,
    MatTooltip,
    NotificationListComponent,
    TrutPopoverModule,
    RouterLink,
    AssistantSearchComponent,
    IconComponent,
    MatAnchor
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    'class': 'block w-full h-full'
  }
})
export class HeaderComponent {
  protected _themeManager = inject(ThemeManagerService);
  private _layoutApi = inject(LayoutApiService);
  isDark = this._themeManager.isDark();

  @Input()
  sidebarHidden = false;

  toggleSidebar(): void {
    if (!this.sidebarHidden) {
      this._layoutApi.hideSidebar('root');
    } else {
      this._layoutApi.showSidebar('root');
    }

    this.sidebarHidden = !this.sidebarHidden;
  }
}
