import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationModel } from '../../../Models/Navigations/Navigation.model';
import { NavigationService } from '../../../Services/Navigations/navigation.service';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
  providers: [NavigationService]
})
export class NavContentComponent implements OnInit {
  public navigation: any;
  public prevDisabled: string;
  public nextDisabled: string;
  public contentWidth: number;
  public wrapperWidth: any;
  public scrollWidth: any;
  public windowWidth: number;

  @ViewChild('navbarContent', {static: false}) navbarContent: ElementRef;
  @ViewChild('navbarWrapper', {static: false}) navbarWrapper: ElementRef;

  constructor(
    private location: Location,
    // tslint:disable-next-line: variable-name
    private _navService: NavigationService
    ) {
    this.windowWidth = window.innerWidth;
    this.navigation = this._navService.getNav();
    this.prevDisabled = 'disabled';
    this.nextDisabled = '';
    this.scrollWidth = 0;
    this.contentWidth = 0;
  }

  ngOnInit() {
  }



  fireLeave() {
    const sections = document.querySelectorAll('.pcoded-hasmenu');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
      sections[i].classList.remove('pcoded-trigger');
    }

    let currentUrl = this.location.path();
    // tslint:disable-next-line: no-string-literal
    if (this.location['_baseHref']) {
      // tslint:disable-next-line: no-string-literal
      currentUrl = this.location['_baseHref'] + this.location.path();
    }
    // tslint:disable-next-line: quotemark
    const link = "a.nav-link[ href='" + currentUrl + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const upParent = parent.parentElement.parentElement;
      const lastParent = upParent.parentElement;
      if (parent.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('active');
      } else if (upParent.classList.contains('pcoded-hasmenu')) {
        upParent.classList.add('active');
      } else if (lastParent.classList.contains('pcoded-hasmenu')) {
        lastParent.classList.add('active');
      }
    }
  }


  fireOutClick() {
    let currentUrl = this.location.path();
    // tslint:disable-next-line: no-string-literal
    if (this.location['_baseHref']) {
      // tslint:disable-next-line: no-string-literal
      currentUrl = this.location['_baseHref'] + this.location.path();
    }
    // tslint:disable-next-line: quotemark
    const link = "a.nav-link[ href='" + currentUrl + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const upParent = parent.parentElement.parentElement;
      const lastParent = upParent.parentElement;
      if (parent.classList.contains('pcoded-hasmenu')) {
          parent.classList.add('pcoded-trigger');
          parent.classList.add('active');
      } else if (upParent.classList.contains('pcoded-hasmenu')) {
          upParent.classList.add('pcoded-trigger');
          upParent.classList.add('active');
      } else if (lastParent.classList.contains('pcoded-hasmenu')) {
          lastParent.classList.add('pcoded-trigger');
          lastParent.classList.add('active');
      }
    }
  }

}
