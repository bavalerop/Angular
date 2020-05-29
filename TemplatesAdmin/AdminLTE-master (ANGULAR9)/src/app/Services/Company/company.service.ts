import { Injectable } from '@angular/core';
import { CompanyModel } from '../../Models/Company/Company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public empresa: CompanyModel;

  constructor() {
    this.empresa = new CompanyModel(1, 'Fundacion Vivis', 'Bogota', 'Calle falsa 123', 'assets/img/logoVivis.jpg');
  }

  getEmpresa() {
    return this.empresa;
  }
}
