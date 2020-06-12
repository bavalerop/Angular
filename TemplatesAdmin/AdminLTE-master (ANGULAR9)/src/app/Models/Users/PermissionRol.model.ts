import { RolModel } from './Rol.model';
import { PermissionModel } from './Permission.model';

export class PermissionRolModel {

  constructor(public permission: PermissionModel,
              public rol: RolModel,
              public rutaMenu: string,
              public createFech: Date,
              public createUser: number,
              public updateFech: Date,
              public updateUser: number) {}
}
