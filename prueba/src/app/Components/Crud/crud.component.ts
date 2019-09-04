import { Component } from '@angular/core';


@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent {
    public id: number;
    public nombre: string;
    public apellido: string;
    public correo: string;
    public password: string;
    public pruebaArray: Array<any>;

    constructor() {
        this.id = 0;
        this.nombre = 'nombre';
        this.apellido = 'apellido';
        this.correo = 'correo';
        this.password = 'password';
        this.pruebaArray = ['buenas', 'como', 'estan'];
        console.log(this.pruebaArray);
    }

    ngOnInit() {
        this.holaMundo();
    }

    holaMundo() {
        alert('hola mundo');
    }
}

