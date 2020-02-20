import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService) {

    this.error = false;

    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;

    }, ( errorServicio ) => {
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}
