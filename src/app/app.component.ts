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
    // 'screen_burn',
    'low_power'
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
      this.applyTheme();
  }

  shuffleTheme() {
    const themesLength = this.allThemes.length - 1;
    const nextIndex = this.allThemes.indexOf(this.currTheme) + 1;

    if (themesLength < nextIndex) {
      this.currTheme = this.allThemes[0];
    } else {
      this.currTheme = this.allThemes[nextIndex];
    }
    this.applyTheme();
  }

  applyTheme() {
    switch(true) {
      case this.currTheme === 'cmykill_em_all' : {
        this.renderer.setStyle(this.cardEl?.nativeElement, 'background-color', 'white');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'color', 'black');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'box-shadow', '-2px -2px black, 5px 5px cyan, 10px 10px magenta, 15px 15px yellow');

        this.renderer.setStyle(this.document.body, 'background-color', 'white');
        this.renderer.setStyle(this.document.body, 'color', 'black');

        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'color', 'black');
        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'text-shadow', 'cyan 5px 0, magenta 10px 0, yellow 15px 0');

        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'text-shadow', 'black 1px 0 10px, grey 2px 0 20px');
        break;
      }
      case this.currTheme === 'retro' : {
        this.renderer.setStyle(this.cardEl?.nativeElement, 'background-color', 'rgb(0, 40, 0)');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'color', 'greenyellow');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'box-shadow', '-2px -2px rgb(0, 60, 0), 5px 5px rgb(0, 60, 0), 10px 10px rgb(0, 80, 0), 15px 15px rgb(0, 100, 0)');

        this.renderer.setStyle(this.document.body, 'background-color', 'rgb(0, 40, 0)');
        this.renderer.setStyle(this.document.body, 'color', 'greenyellow');

        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'color', 'yellowgreen');
        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'text-shadow', 'rgb(0, 60, 0) 5px 0, rgb(0, 80, 0) 10px 0, rgb(0, 100, 0) 15px 0');
        
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'text-shadow', 'yellowgreen 1px 0 10px, yellow 2px 0 20px');
        break;
      }
      case this.currTheme === 'omen' : {
        this.renderer.setStyle(this.cardEl?.nativeElement, 'background-color', 'black');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'color', 'red');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'box-shadow', '-2px -2px rgb(40, 0, 0), 5px 5px rgb(40,0,0), 10px 10px rgb(60,0,0), 15px 15px rgb(80,0,0)');

        this.renderer.setStyle(this.document.body, 'background-color', 'black');
        this.renderer.setStyle(this.document.body, 'color', 'red');

        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'color', 'red');
        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'text-shadow', 'rgb(40,0,0) 5px 0, rgb(60,0,0) 10px 0, rgb(80,0,0) 15px 0');
        
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'text-shadow', 'red 1px 0 10px, pink 2px 0 20px');
        break;
      }
      case this.currTheme === 'screen_burn' : {
        this.renderer.setStyle(this.cardEl?.nativeElement, 'background-color', 'white');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'color', 'black');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'box-shadow', '-2px -2px rgb(215,215,215), 5px 5px rgb(215,215,215), 10px 10px rgb(175,175,175), 15px 15px rgb(135,135,135)');

        this.renderer.setStyle(this.document.body, 'background-color', 'white');
        this.renderer.setStyle(this.document.body, 'color', 'black');

        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'color', 'black');
        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'text-shadow', 'cyan 5px 0, magenta 10px 0, yellow 15px 0');
        
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'text-shadow', 'black 1px 0 10px, grey 2px 0 20px');
        break;
      }
      case this.currTheme === 'low_power' : {
        this.renderer.setStyle(this.cardEl?.nativeElement, 'background-color', 'black');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.cardEl?.nativeElement, 'box-shadow', '-2px -2px rgb(40,40,40), 5px 5px rgb(40,40,40), 10px 10px rgb(60,60,60), 15px 15px rgb(80,80,80)');

        this.renderer.setStyle(this.document.body, 'background-color', 'black');
        this.renderer.setStyle(this.document.body, 'color', 'white');

        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'color', 'rgb(28, 28, 28');
        this.renderer.setStyle(this.bTitleEl?.nativeElement, 'text-shadow', 'rgb(40,40,40) 5px 0, rgb(60,60,60) 10px 0, rgb(80,80,80) 15px 0');
        
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'color', 'black');
        this.renderer.setStyle(this.oTitleEl?.nativeElement, 'text-shadow', 'white 1px 0 10px, grey 2px 0 20px');
        break;
      }
    }
  }
  
}
