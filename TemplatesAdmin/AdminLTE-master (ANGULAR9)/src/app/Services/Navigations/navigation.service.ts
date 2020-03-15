import { Injectable } from '@angular/core';
import { NavigationModel } from '../../Models/Navigations/Navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public navGroup: NavigationModel;
  public navGroup2: NavigationModel;
  public navItemArray: Array<NavigationModel> = [];
  public navItemArrayFinal: Array<NavigationModel>;
  public navItemArrayFinal2: Array<NavigationModel>;

  constructor() {
    this.navItemArrayFinal =  [
       new NavigationModel(2, 'Users', 'item', 'd', 'fas fa-tachometer-alt', false, 'users', '', '', []),
       new NavigationModel(3, 'Menus', 'collapse', '', 'fas fa-layer-group', false, 'profile', '', '', [
        new NavigationModel(4, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 'dash2', '', '', []),
        new NavigationModel(5, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 's', '', '', []),
        new NavigationModel(6, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 's', '', '', [])
       ])
    ];
    this.navItemArrayFinal2 =  [
      new NavigationModel(2, 'Users', 'item', 'd', 'fas fa-tachometer-alt', false, 'pro', '', '', []),
      new NavigationModel(3, 'Menus', 'collapse', '', 'fas fa-layer-group', false, 'dashooo', '', '', [
       new NavigationModel(4, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 's', '', '', []),
       new NavigationModel(5, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 's', '', '', []),
       new NavigationModel(6, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 's', '', '', [])
      ])
   ];
    this.navGroup = new NavigationModel(1, 'Maestros', 'group', '', '', false, '', '', '', this.navItemArrayFinal);
    this.navGroup2 = new NavigationModel(1, 'Maestros', 'group', '', '', false, '', '', '', this.navItemArrayFinal2);
    this.navItemArray = [this.navGroup, this.navGroup2];
  }

  getNav() {
    return this.navItemArray;
  }
}
