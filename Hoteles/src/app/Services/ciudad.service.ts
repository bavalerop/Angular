import { Injectable } from '@angular/core';
import { Ciudad } from '../Models/ciudad.model';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CiudadService {
  public rut: string;
  public ciudad: Ciudad;
  public data: any;


  constructor(private api: ApiService) {
  }

  getCiudades() {
    return this.api.getService('ciudad', '').pipe( map( (data: any) => data.DATA ));
  }

   getCiudad(id: number): any {
     this.rut = 'ciudad/' + id;
     this.api.getService(this.rut, '').subscribe( (data: any[]) => {
        this.data = data;
      });
     return this.data;
   }

  postCiudades(ciudades: Array<any>): any {
   return this.api.postService('ciudad', '', ciudades).subscribe( (data: any[]) => {
      return data;
    });
  }



}
