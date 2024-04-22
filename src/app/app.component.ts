import { afterNextRender, Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { ThemeManagerService } from '@services/theme-manager.service';
import { ScreenLoaderComponent } from '@app/screen-loader/screen-loader.component';
import { ScreenLoaderService } from '@services/screen-loader.service';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs';
import { AnalyticsService } from '@services/analytics.service';
import { SeoService } from '@services/seo.service';
import { PageLoadingBarComponent } from 'protrack/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ScreenLoaderComponent,
    PageLoadingBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private _themeManager = inject(ThemeManagerService);
  private _screenLoader = inject(ScreenLoaderService);
  private _analyticsService = inject(AnalyticsService);
  private _seoService = inject(SeoService);
  private _platformId = inject(PLATFORM_ID);
  private _router = inject(Router);

  loadingText = signal('Application Loading');
  pageLoaded = signal(false);

  constructor() {
    afterNextRender(() => {
      // Scroll a page to top if url changed
      this._router.events
        .pipe(
          filter(event=> event instanceof NavigationEnd)
        )
        .subscribe(() => {
          window.scrollTo({
            top: 0,
            left: 0
          });
          setTimeout(() => {
            this._screenLoader.hide();
            this.pageLoaded.set(true);
          }, 3000);
        })
      ;
      this._analyticsService.trackPageViews();
    });
  }

  ngOnInit(): void {
    this._themeManager.setColorScheme(this._themeManager.getPreferredColorScheme());

    if (isPlatformBrowser(this._platformId)) {
      setTimeout(() => {
        this.loadingText.set('Initializing Modules');
      }, 1500);
    }

    this._seoService.trackCanonicalChanges();
  }
}
