import { Injectable } from '@angular/core';
import { PermissionModel } from '../../Models/Users/Permission.model';
import { NavigationModel } from 'src/app/Models/Navigations/Navigation.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  public permiso: PermissionModel;

  constructor() {
    // tslint:disable-next-line: max-line-length
    this.permiso = new PermissionModel(1,  new NavigationModel(1, 'Maestros', 'group', '', '', true, '', '', '', 0, new Date('2020/03/18'), 1, null, null, 1, []), 'permiso para maestros', 1, new Date('2020/03/18'), 1, null, null);
  }

  getPermission() {
    return this.permiso;
  }

}
