import { Injectable } from '@angular/core';
import { UserModel } from '../../Models/Users/User.model';
import { RolModel } from 'src/app/Models/Users/Rol.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public uss: UserModel;

  constructor() {
    this.uss = new UserModel(1, 'Brayan', 'Andres', 'Valero', 'Pinzon', 'bvalero',
     '12345', new Date('1994-09-04'), 'bavalerop@gmail.com', 'Calle Falsa 123', 5555555,
     'assets/img/brayanprofile.jpg', 1, new Date('2020/03/18'), null,
     new RolModel(1, 'Super administrador', 'usuario con todos los permisos de la aplicacion', 1, new Date('2020/03/18'), 1, null, null));
  }

  getUser() {
    return this.uss;
  }
}
