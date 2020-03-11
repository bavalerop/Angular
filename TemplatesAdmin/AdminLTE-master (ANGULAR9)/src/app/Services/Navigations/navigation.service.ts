import { Injectable } from '@angular/core';
import { NavigationModel } from '../../Models/Navigations/Navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public navGroup: NavigationModel;
  public navItemArray: Array<NavigationModel> = [];
  public navItemArrayFinal: Array<NavigationModel>;

  constructor() {
    this.navItemArrayFinal =  [
       new NavigationModel(2, 'Users', 'item', '', 'fas fa-tachometer-alt', false, '', '', '', []),
       new NavigationModel(3, 'Menus', 'collapse', '', 'fas fa-layer-group', false, '', '', '', [
        new NavigationModel(4, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, '', '', '', []),
        new NavigationModel(5, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, '', '', '', []),
        new NavigationModel(6, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, '', '', '', [])
       ])
    ];
    this.navGroup = new NavigationModel(1, 'Maestros', 'group', '', '', false, '', '', '', this.navItemArrayFinal);
    this.navItemArray = [this.navGroup, this.navGroup];
  }

  getNav() {
    return this.navItemArray;
  }
}
