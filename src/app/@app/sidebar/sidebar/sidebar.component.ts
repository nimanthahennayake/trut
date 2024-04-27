import { Component, inject, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { TrutNavigationModule } from 'protrack/components';
import { MatRipple } from '@angular/material/core';
import { OrderByPipe } from 'protrack/components';
import { ToolbarComponent } from '@app/sidebar/_toolbar/toolbar.component';
import { UpgradeToProComponent } from '@app/sidebar/_upgrade-to-pro/upgrade-to-pro.component';
import { UpgradeNowComponent } from '@app/sidebar/_upgrade-now/upgrade-now.component';
import { UsedSpaceComponent } from '@app/sidebar/_used-space/used-space.component';

export interface NavItem {
  type: string;
  name: string;
  icon?: string;
  id?: string | number;
  link?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    TrutNavigationModule,
    MatRipple,
    ToolbarComponent,
    OrderByPipe,
    UpgradeToProComponent,
    UpgradeNowComponent,
    UsedSpaceComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    'class': 'sidebar'
  }
})
export class SidebarComponent {
  router = inject(Router);
  location = inject(Location);
  height: string | null = '200px';

  @ViewChild('navigation', { static: true })
  navigation!: any;

  navItems: NavItem[] = [
    {
      id: 'account',
      type: 'group',
      name: 'Account',
      icon: 'badge',
      children: [
        {
          type: 'link',
          name: 'Settings',
          link: '/pages/account/settings'
        },
      ]
    },
    {
      id: 'settings',
      type: 'group',
      name: 'Settings',
      icon: 'badge',
      children: [
        {
          type: 'link',
          name: 'Company',
          link: '/pages/settings'
        },
      ]
    },
  ];
  navItemLinks: NavItem[] = [];
  activeLinkId: any = '/';

  ngOnInit() {
    this.navItems.forEach(navItem => {
      this.navItemLinks.push(navItem);

      if (navItem.children) {
        this.navItemLinks = this.navItemLinks.concat(navItem.children as NavItem[]);
      }
    });
    this._activateLink();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this._activateLink();
      })
      ;
  }

  private _activateLink() {
    const activeLink = this.navItemLinks.find(
      navItem => navItem.link === this.location.path()
    );

    if (activeLink) {
      this.activeLinkId = activeLink.link;
    } else {
      this.activeLinkId = null;
    }
  }
}
