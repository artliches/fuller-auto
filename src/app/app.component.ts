import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('cards', {static: false}) cardEl: ElementRef | undefined;
  @ViewChild('backgroundTitle', {static: false}) bTitleEl: ElementRef | undefined;
  @ViewChild('overlayTitle', {static: false}) oTitleEl: ElementRef | undefined;

  currTheme = 'cmykill_em_all';
  allThemes = [
    'cmykill_em_all',
    'retro',
    'omen',
    'low_power',
    'mork',
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
      const theme = window.localStorage.getItem('fuller-auto-theme');
      if (theme) {
        this.currTheme = theme;
      }
      console.log(this.currTheme);
      // this.applyTheme();
  }

  shuffleTheme() {
    const themesLength = this.allThemes.length - 1;
    const nextIndex = this.allThemes.indexOf(this.currTheme) + 1;

    if (themesLength < nextIndex) {
      this.currTheme = this.allThemes[0];
    } else {
      this.currTheme = this.allThemes[nextIndex];
    }
    window.localStorage.setItem('fuller-auto-theme', this.currTheme);
    // this.applyTheme();
  }
}
