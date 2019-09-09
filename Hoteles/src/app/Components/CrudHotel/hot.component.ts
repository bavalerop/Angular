import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../Models/hotel.model';
import { Ciudad } from '../../Models/ciudad.model';
import { PageEvent } from '@angular/material/paginator';


@Component({
    selector: 'app-hotel',
    templateUrl: './hot.component.html',
    styleUrls: ['./hot.component.css']
})
export class HotelComponent implements OnInit {
    public tituloAlert: string;
    public pageSize: number;
    public pageNumber: number;
    public pageSizeOptions: Array<any>;
    public title: string;
    public Ciudades: Array<Ciudad>;
    public seccion: string;
    public Hoteles: Array<Hotel>;


    constructor() {
        this.seccion = 'read';
        this.pageNumber = 1;
        this.pageSize = 2;
        this.title = 'Hoteles';
        this.Ciudades = [
            new Ciudad(1, 'Bogota'),
            new Ciudad(2, 'Cali'),
            new Ciudad(3, 'Medellin')
        ];
        this.Hoteles = [
            new Hotel(1, 'Decameron1', 'Bogota', 'calle falsa 123', 20),
            new Hotel(2, 'Decameron2', 'Medellin', 'calle falsa 123', 20),
            new Hotel(3, 'Decameron3', 'Cali', 'calle falsa 123', 20)
        ];
        this.pageSizeOptions = [2, 15, 50, 100, this.Hoteles.length];
    }

    ngOnInit() {
    }

    navegar(seccion: string) {
        this.seccion = seccion;
    }

    handlePage(e: PageEvent) {
        this.pageSize = e.pageSize;
        this.pageNumber = e.pageIndex + 1;
    }
}

