import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public redes: string;
  public autor: string;
  public fecha: Date;
  public anio: string;

  constructor() {
    this.fecha = new Date();
    this.anio = this.fecha.getFullYear().toString();
    this.autor = 'Brayan Valero';
    this.redes = 'https://www.linkedin.com/in/brayan-andrés-valero-pinzón-512900159';
  }

  ngOnInit() {
  }

}
