import {Component, Input, OnInit, ɵConsole} from '@angular/core';
import { NavigationModel } from '../../../../Models/Navigations/Navigation.model';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss']
})

export class NavCollapseComponent implements OnInit {
  public visible;

  @Input() item: NavigationModel;

  constructor() {
    this.visible = false;
  }

  ngOnInit() {
  }

  navCollapse(e) {
    let parent = e.target;
    // se valida si se esta desplegando el menu
    parent = parent.querySelector('.arrows').element;
    console.log(parent);
    if (parent.contains('fas fa-angle-right')) {
        console.log('si la tiene');
        parent.replace('fas fa-angle-right', 'fas fa-angle-down');
    } else {
      console.log('no la tiene');
      parent.replace('fas fa-angle-down', 'fas fa-angle-right');
    }

    console.log(parent);

    const sections = document.querySelectorAll('.pcoded-hasmenu');
        // tslint:disable-next-line: comment-format
       // sections[i].classList.remove('pcoded-trigger');
        // tslint:disable-next-line: comment-format
        //preParent.parentElement.classList.add('pcoded-trigger');
        // tslint:disable-next-line: comment-format
        //preParent.classList.contains('pcoded-submenu'));
  }

}
