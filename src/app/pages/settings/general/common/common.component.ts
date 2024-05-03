import { Component, inject, OnInit } from '@angular/core';
import { TrutNavigationModule } from 'trut/components';
import { LayoutBodyComponent } from 'trut/components';
import { LayoutComponent } from 'trut/components';
import { LayoutSidebarComponent } from 'trut/components';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';

export interface NavItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [
    TrutNavigationModule,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent implements OnInit {
  router = inject(Router);
  location = inject(Location);
  activeLinkId: string | null;
  navItems: NavItem[] = [
    {
      name: 'Country',
      link: '/pages/settings/general/country'
    },
    {
      name: 'Company',
      link: '/pages/settings/general/company'
    },
    {
      name: 'Facility',
      link: '/pages/settings/general/facility'
    },
    {
      name: 'Division',
      link: '/pages/settings/general/division'
    },
    {
      name: 'Department',
      link: '/pages/settings/general/department'
    },
  ];

  ngOnInit() {
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
    const activeLink = this.navItems.find(
      navItem => navItem.link === this.location.path()
    );

    if (activeLink) {
      this.activeLinkId = activeLink.link;
    } else {
      this.activeLinkId = null;
    }
  }
}
