import { Injectable } from '@angular/core';
import { NavigationModel } from '../../Models/Navigations/Navigation.model';
import { navy } from '../../../assets/navy.js';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public navGroup: NavigationModel;
  public navItemArray: Array<NavigationModel>;
  public navItemArrayFinal: Array<NavigationModel>;
  public navy: navy;

  constructor() {
    this.navItemArrayFinal =  [
       new NavigationModel(2, 'Users', 'item', '', 'fas fa-users', false, '', '', '', []),
       new NavigationModel(3, 'Menus', 'item', '', 'fas fa-layer-group', false, '', '', '', [])
    ];
    this.navGroup = new NavigationModel(1, 'Maestros', 'group', '', '', false, '', '', '', this.navItemArrayFinal);
    this.navy = new navy();
  }

  getNav() {
    console.log(this.navy.getNavy());
    return this.navy.getNavy();
  }
}
