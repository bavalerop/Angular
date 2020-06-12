import { NavigationModel } from '../../Models/Navigations/Navigation.model';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { navy } from '../../../assets/navy.js';


@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  public rut: string;
  public navy: navy;

  constructor(private api: ApiService) {
	  this.navy = new navy();
  }

  getNavByUser(userId: number): Observable<NavigationModel[]> {
    return this.api.getService('navigation/menus/group/1', '').pipe(
      map( response => response as NavigationModel[])
    );
  }
  
  //Para uso de services externos a angular pueden ser en JS por el uso de Socket Cluster
  getNav() {
    console.log(this.navy.getNavy());
    return this.navy.getNavy();
  }

  getNavByTypechildless(type: string, state: number): Observable<NavigationModel[]> {
    return this.api.getService('navigation/menus/childless/' + type + '/' + state, '').pipe(
      map( response => response as NavigationModel[])
    );
  }

  postNav(nav: NavigationModel): Observable<any> {
    return this.api.postService('navigation/save', '', nav).pipe(
      map( response => response as object)
    );
   }

   putNav(nav: any): Observable<any> {
     if (nav.state === false) {
       nav.state = 0;
     } else {
       nav.state = 1;
     }
     return this.api.putService('navigation/update/' + nav.id, '', nav).pipe(
      map( response => response as object)
    );
   }
}
