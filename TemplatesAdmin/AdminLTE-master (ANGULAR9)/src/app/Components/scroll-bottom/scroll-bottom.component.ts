import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-bottom',
  templateUrl: './scroll-bottom.component.html',
  styleUrls: ['./scroll-bottom.component.scss']
})
export class ScrollBottomComponent {

  windowScrolled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    // tslint:disable-next-line: one-variable-per-declaration
    let scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;
    totalHeight = Math.trunc(totalHeight).valueOf();
    // tslint:disable-next-line: triple-equals
    if ( window.pageYOffset > 10 && totalHeight != scrollHeight) {
        this.windowScrolled = true;
    } else if ( this.windowScrolled && window.pageYOffset
      || window.pageYOffset < 10 ) {
        this.windowScrolled = false;
    } else if (totalHeight === scrollHeight) {
      this.windowScrolled = false;
    }
  }

  scrollToBottom() {
    (function smoothscroll() {

      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.scrollTo(0, currentScroll + (currentScroll * 2000));
      }

      this.windowScrolled = false;

    })();
  }

}
