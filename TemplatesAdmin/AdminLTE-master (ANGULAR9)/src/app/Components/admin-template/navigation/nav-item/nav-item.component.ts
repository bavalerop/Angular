import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { NavigationModel } from '../../../../Models/Navigations/Navigation.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})

export class NavItemComponent implements OnInit {
  @Input() item: NavigationModel;

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  closeOtherMenu(event) {
      const ele = event.target;
      if (ele !== null && ele !== undefined) {
        const parent = ele.parentElement;
        const upParent = parent.parentElement.parentElement;
        const lastParent = upParent.parentElement;
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('pcoded-trigger');
        }
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
      if ((document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
        document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
      }
  }

}
