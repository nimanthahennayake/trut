import { Component, inject, input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'trut-playground',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MarkdownComponent
  ],
  providers: [
    provideMarkdown()
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './playground.component.html',
  styleUrl: 'playground.component.scss'
})
export class PlaygroundComponent {
  private _snackBar = inject(MatSnackBar);

  exampleUrl = input<string>();
  exampleName = input<string>();

  htmlSrc: string;
  tsSrc: string;
  cssSrc: string;
  alreadyLoaded = false;

  @ViewChild('markdownRef')
  private _markdownRef: any;

  showSource = false;
  currentTab = 'html';
  exampleLoading = false;

  get hasScr(): boolean {
    return !!this.htmlSrc || !!this.tsSrc || !!this.cssSrc;
  }

  get src(): string | null {
    if (this.isCurrentTab('html')) {
      return "```html\n" +
        "" + this.htmlSrc + "```";
    }

    if (this.isCurrentTab('ts')) {
      return "```typescript\n" +
        "" + this.tsSrc + "```";
    }

    if (this.isCurrentTab('css')) {
      return "```css\n" +
        "" + this.cssSrc + "```";
    }

    return null;
  }

  contentCopy(): void {
    const text = this._markdownRef.element.nativeElement.querySelector('pre code').innerText;
    navigator.clipboard.writeText(text);
    this._snackBar.open('Source code has been copied to your clipboard', '', {
      duration: 3000
    });
  }

  async toggleSource() {
    this.showSource = !this.showSource;

    if (this.showSource) {
      if (this.alreadyLoaded) {
        return;
      }

      this.exampleLoading = true;
      const r = await Promise.all([
        fetch(`${this.exampleUrl()}/${this.exampleName()}/${this.exampleName()}.component.ts`),
        fetch(`${this.exampleUrl()}/${this.exampleName()}/${this.exampleName()}.component.scss`),
        fetch(`${this.exampleUrl()}/${this.exampleName()}/${this.exampleName()}.component.html`),
      ]).then(r => r.map(f => f.text()));
      this.tsSrc = await r[0];
      this.cssSrc = await r[1];
      this.htmlSrc = await r[2];
      this.exampleLoading = false;
      this.alreadyLoaded = true;
    } else {
      this.exampleLoading = false;
    }
  }

  isCurrentTab(tabId: string): boolean {
    return this.currentTab === tabId;
  }

  selectTab(tabId: string): void {
    this.currentTab = tabId;
  }
}
