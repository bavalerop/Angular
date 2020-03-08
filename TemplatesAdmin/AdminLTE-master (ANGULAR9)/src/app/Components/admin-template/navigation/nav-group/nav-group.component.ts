import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { NavigationModel } from '../../../../Models/Navigations/Navigation.model';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit {
  @Input() item: NavigationModel;
  @Input() activeId: any;
  public gradientConfig: any;

  constructor(private zone: NgZone, private location: Location) {
  }

  ngOnInit() {
    // at reload time active and trigger link
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
