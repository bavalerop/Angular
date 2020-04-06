import { NavigationModel } from '../Navigations/Navigation.model';
export class PermissionModel {

  constructor(public id: number,
              public menu: NavigationModel,
              public desc: string,
              public state: number,
              public createFech: Date,
              public createUser: number,
              public updateFech: Date,
              public updateUser: number) {}
}
