import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'

})
export class BodyComponent {
    mostrar = 'true';
    frase: any = {
        mensaje: 'Un....',
        autor: 'Ben'
    };

    personajes: string[] = ['Ironman','SpiderMan','Thor'];
}
