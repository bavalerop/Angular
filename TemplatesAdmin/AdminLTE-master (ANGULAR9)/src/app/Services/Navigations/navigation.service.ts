import { NavigationModel } from '../../Models/Navigations/Navigation.model';
import { Injectable } from '@angular/core';

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
       // tslint:disable-next-line: max-line-length
       new NavigationModel(3, 'Menus', 'collapse', '', 'fas fa-layer-group', true, 'profile', '', '', 0, new Date('2020/03/18'), 1, null, null, 1, []),
       // tslint:disable-next-line: max-line-length
       new NavigationModel(2, 'Usuarios', 'collapse', '', 'fas fa-users', true, 'users', '', '', 0, new Date('2020/03/18'), 1, null, null, 1, [
        // tslint:disable-next-line: max-line-length
        new NavigationModel(4, 'Crear', 'itemalone', '', 'fas fa-plus-square', true, 'dash2', '', '', 0, new Date('2020/03/18'), 1, null, null, 1, []),
        // tslint:disable-next-line: max-line-length
        new NavigationModel(5, 'Modificar', 'itemalone', '', 'fas fa-edit', true, 's', '', '', 0, new Date('2020/03/18'), 1, null, null, 1, []),
        // tslint:disable-next-line: max-line-length
        new NavigationModel(6, 'Borrar', 'itemalone', '', 'fas fa-trash-alt', true, 's', '', '', 0, new Date('2020/03/18'), 1, null, null, 1, [])
       ])
    ];
      // this.navItemArrayFinal2 = [
      // new NavigationModel(2, 'Users', 'item', 'd', 'fas fa-tachometer-alt', false, 'pro', '', '', []),
      // new NavigationModel(3, 'Menus', 'collapse', '', 'fas fa-layer-group', false, 'dashooo', '', '', [
      // new NavigationModel(4, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 's', '', '', []),
      // new NavigationModel(5, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 's', '', '', []),
      // new NavigationModel(6, 'Users', 'itemalone', '', 'fas fa-tachometer-alt', false, 's', '', '', [])
      // ])
      // ];
    // tslint:disable-next-line: max-line-length
    this.navGroup = new NavigationModel(1, 'Maestros', 'group', '', '', true, '', '', '', 0, new Date('2020/03/18'), 1, null, null, 1, this.navItemArrayFinal);
    // this.navGroup2 = new NavigationModel(1, 'Maestros', 'group', '', '', false, '', '', '', this.navItemArrayFinal2);
    this.navItemArray = [this.navGroup];
  }

  getNav() {
    return this.navItemArray;
  }

  getNavByUser(userId: number) {
    // tslint:disable-next-line: prefer-const
    let navItemArr: Array<NavigationModel> = [];
    // tslint:disable-next-line: no-shadowed-variable
    for (const item of this.navItemArray) {
        navItemArr.push(this.changeHidden(item));
    }
    return navItemArr;
  }

  changeHidden(navItem: NavigationModel) {
        const navItemArr: Array<NavigationModel> = [];
        navItem.hidden = false;
        if (navItem.children.length > 0) {
          for (const item of navItem.children) {
              navItemArr.push(this.changeHidden(item));
          }
        }
        navItem.children = navItemArr;
        return navItem;
  }
}
