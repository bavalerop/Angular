import { Injectable } from '@angular/core';
import { UserModel } from '../../Models/Users/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public uss: UserModel;

  constructor() {
    this.uss = new UserModel(1, 'Brayan', 'Andres', 'Valero', 'Pinzon', 'bvalero',
     '12345', new Date('1994-09-04'), 'bavalerop@gmail.com', 'Calle Falsa 123', 5555555, 'assets/img/brayanprofile.jpg');
  }

  getUser() {
    return this.uss;
  }
}
