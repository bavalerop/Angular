import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  windowScrolled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    // tslint:disable-next-line: one-variable-per-declaration
    let scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight - 1;
    totalHeight = window.scrollY + window.innerHeight;
    totalHeight = Math.trunc(totalHeight).valueOf();

    // tslint:disable-next-line: triple-equals
    if (window.pageYOffset > 100 && totalHeight != scrollHeight) {
        this.windowScrolled = true;
    } else if ( this.windowScrolled && window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop < 10 ) {
        this.windowScrolled = false;
    } else if (totalHeight === scrollHeight) {
        this.windowScrolled = false;
    }
  }

  scrollToTop() {

    (function smoothscroll() {

      const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScrollTop > 0) {
        window.scrollTo(0, currentScrollTop - (currentScrollTop / 1));
      }

    })();
  }

  ngOnInit() {
  }

}
