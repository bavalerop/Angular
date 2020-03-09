import {Component, Input, NgZone, OnInit} from '@angular/core';
import { NavigationModel } from '../../../../Models/Navigations/Navigation.model';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit {
  @Input() item: NavigationModel;

  constructor() {
  }

  ngOnInit() {

  }

}
