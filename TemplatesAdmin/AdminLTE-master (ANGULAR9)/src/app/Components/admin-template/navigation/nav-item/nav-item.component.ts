import {Component, Input, OnInit} from '@angular/core';
import { NavigationModel } from '../../../../Models/Navigations/Navigation.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})

export class NavItemComponent implements OnInit {
  @Input() item: NavigationModel;

  constructor() {
  }

  ngOnInit() {
  }

}
