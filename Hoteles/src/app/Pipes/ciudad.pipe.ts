import { Pipe, PipeTransform } from '@angular/core';
import { Ciudad } from '../Models/ciudad.model';
@Pipe({
  name: 'ciudadPipe'
})
export class CiudadPipe implements PipeTransform {
    public Ciudades: Array<Ciudad>;
    public ciud: Ciudad;
    transform(value: string): string {
        this.Ciudades = [
            new Ciudad(1, 'Bogota'),
            new Ciudad(2, 'Cali'),
            new Ciudad(3, 'Medellin')
        ];

        const result = this.Ciudades.filter( (ciu: Ciudad) => String(ciu.id) === value);
        return result[0].nombre;
    }
}
