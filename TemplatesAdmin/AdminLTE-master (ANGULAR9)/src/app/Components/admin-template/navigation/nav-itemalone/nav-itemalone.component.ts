import { Component, OnInit, Input } from '@angular/core';
import { NavigationModel } from '../../../../Models/Navigations/Navigation.model';

@Component({
  selector: 'app-nav-itemalone',
  templateUrl: './nav-itemalone.component.html',
  styleUrls: ['./nav-itemalone.component.scss']
})
export class NavItemaloneComponent implements OnInit {

  @Input() item: NavigationModel;

  constructor() { }

  ngOnInit(): void {
  }

}
