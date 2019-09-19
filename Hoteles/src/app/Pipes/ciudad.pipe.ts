import { Pipe, PipeTransform } from '@angular/core';
import { Ciudad } from '../Models/ciudad.model';
import { CiudadService } from '../Services/ciudad.service';

@Pipe({
  name: 'ciudadPipe'
})
export class CiudadPipe implements PipeTransform {
    public Ciudades: Array<any>;
    public ciud: Ciudad;

    constructor(private ciudad: CiudadService){
         // GetCiudad
         this.ciudad.getCiudades().subscribe(((data: any) => {
            this.Ciudades = Object.keys(data).map(function(key) {
                return [Number(key[0]), data[key[0]]];
              });
         console.log(this.Ciudades);
        }
        ));
    }

    transform(value: string): string {
        const result = this.Ciudades.filter((ciu: Ciudad) => String(ciu.id) === value);
        return result[0].nombre;
    }
}
