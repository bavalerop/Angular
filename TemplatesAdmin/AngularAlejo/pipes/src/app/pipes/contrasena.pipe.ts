import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, estado: boolean): any {
    if (estado) {
      let valores = value.split('');
      for ( let i in valores) {  
        valores [ i ] = '*';
      }
      return valores.join(' ');
    } else {
      return value;
    }
  }

}
