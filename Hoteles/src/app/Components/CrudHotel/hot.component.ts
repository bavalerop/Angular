import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../Models/hotel.model';
import { Ciudad } from '../../Models/ciudad.model';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CiudadService } from '../../Services/ciudad.service';

@Component({
    selector: 'app-hotel',
    templateUrl: './hot.component.html',
    styleUrls: ['./hot.component.css']
})
export class HotelComponent implements OnInit {
    public hotSaveForm: FormGroup;
    public hotEditForm: FormGroup;
    public tituloAlert: string;
    public pageSize: number;
    public pageNumber: number;
    public pageSizeOptions: Array<any>;
    public title: string;
    public Ciudades: Array<Ciudad>;
    public seccion: string;
    public hote: Hotel;
    public hote2: Hotel;
    public Hoteles: Array<Hotel>;
    public builderHotSave: FormBuilder;
    public respon: any;

    constructor(buil: FormBuilder, private ciudad: CiudadService) {
        // Servicios de ciduades
        // GetCiudad
        this.ciudad.getCiudades().subscribe((data: any) => {
            this.Ciudades = data;
            // console.log(data);
        },
        error => {
            console.log(error);
        }
        );

        this.builderHotSave = buil;
        this.hotSaveForm = this.builderHotSave.group({
            nit: ['', Validators.required],
            nombre: [''],
            ciudad: [''],
            dir: [''],
            cantHab: ['']
        });    
        this.hotEditForm = this.builderHotSave.group({
            nombre: [''],
            ciudad: [''],
            dir: [''],
            cantHab: ['']
        });
        this.seccion = 'read';
        this.pageNumber = 1;
        this.pageSize = 2;
        this.title = 'Hoteles';
        this.hote = new Hotel(null, '', '', '', null);
        this.hote2 = new Hotel(1, 'buenas', '3', 'calle falsa', 10);
        this.Hoteles = [
            new Hotel(1, 'Decameron1', '1', 'calle falsa 123', 20),
            new Hotel(2, 'Decameron2', '2', 'calle falsa 123', 20),
            new Hotel(3, 'Decameron3', '3', 'calle falsa 123', 20)
        ];
        this.pageSizeOptions = [2, 15, 50, 100, this.Hoteles.length];
    }

    ngOnInit() {
       console.log('OnInit');
       // this.postCiudades(this.Ciudades);
    }

    show(h: Hotel) {
        console.log(h);
    }

    show2(h: string) {
        console.log(h);
    }

    navegar(seccion: string) {
        this.seccion = seccion;
    }
    // Metodos de ciudades
    // Get all ciudades


    // post ciduades
    // postCiudades(ciudades: Array<any>): any {
    //    return this.api.postService('ciudad', '', ciudades).subscribe( (data: any[]) => {
    //        console.log(data);
    //    },
    //    error => {
    //        console.log(error);
    //    }
    //    );
    // }




    handlePage(e: PageEvent) {
        this.pageSize = e.pageSize;
        this.pageNumber = e.pageIndex + 1;
    }

    

}

