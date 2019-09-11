import { Injectable } from '@angular/core';
import { Ciudad } from '../Models/ciudad.model';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CiudadService {
  public rut: string;
  public ciudad: Ciudad;
  public data: any;
  public myData: BehaviorSubject<any> = new BehaviorSubject<any>(0);


  constructor(private api: ApiService) {
   }

   getCiudades(): any {
    this.data = this.api.getService('ciudad', '').subscribe( (data: any[]) => {
      return data;
    });
    return this.data;
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
