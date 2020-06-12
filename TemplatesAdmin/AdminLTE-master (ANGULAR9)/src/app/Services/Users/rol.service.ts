import { Injectable } from '@angular/core';
import { RolModel } from 'src/app/Models/Users/Rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  public rol: RolModel;

  constructor() {
    this.rol = new RolModel(1, 'Super administrador', 'usuario con todos los permisos de la aplicacion',
    1, new Date('2020/03/18'), 1, null, null);
  }

  getRol() {
    return this.rol;
  }
}
