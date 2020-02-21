import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseoService } from '../../services/deseo.service';
import { AlertController, IonList } from '@ionic/angular';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.moodel';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild('lista') lista2: IonList;
  @Input() terminada = true;

  lista: Lista[] = [];
  constructor( public desesoService: DeseoService, private router: Router, private alertCtrl: AlertController ) { }

  ngOnInit() {}


  listaSeleccionada(lista: Lista ) {
    if ( this.terminada ) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrarLista( lista: Lista) {
    this.desesoService.borrarLista( lista );
  }

  async editarLista(lista: Lista) {

    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Editar',
          handler: ( data ) => {
            if (data.titulo.length === 0 ) {
              return;
            } else {
              this.desesoService.editarLista( lista, data.titulo );
              this.lista2.closeSlidingItems();
            }

          }
        }
      ]
    });

    alert.present();

  }


}
