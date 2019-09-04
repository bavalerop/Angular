import { Component } from '@angular/core';
import { Estudiante } from '../../Models/estudianteModel';
import { PageEvent } from '@angular/material/paginator';


@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent {
    public page_size: number;
    public page_number: number;
    public page_size_options: Array<any>;
    public title: string;
    public estudiante: Estudiante;
    public Estudiantes: Array<Estudiante>;

    constructor() {
        this.page_number = 1;
        this.page_size = 2;
        this.page_size_options = [5, 10, 25, 100, 'all'];
        this.title = 'Estudiantes';
        this.estudiante = new Estudiante(1, 'brayan', 'valero', 'bavalerop@gmail.com', '123456');
        this.Estudiantes = [
            new Estudiante(1, 'Brayan', 'Valero', 'bavalerop@gmail.com', '123456'),
            new Estudiante(2, 'Brayitan', 'Valero', 'bavalerop@gmail.com', '123456'),
            new Estudiante(3, 'Brayotan', 'Valero', 'bavalerop@gmail.com', '123456')
        ];
    }

    ngOnInit() {
       // this.holaMundo();
        console.log(this.Estudiantes);
    }

    handlePage(e: PageEvent) {
        this.page_size = e.pageSize;
        this.page_number = e.pageIndex + 1;
    }
}

