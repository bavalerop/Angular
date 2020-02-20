import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herores',
  templateUrl: './herores.component.html',
  styleUrls: ['./herores.component.css']
})
export class HeroresComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService, private router: Router ) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

  }

  verHeroe(indx: number){
    this.router.navigate( ['/heroe', indx ]);
  }

  

}
