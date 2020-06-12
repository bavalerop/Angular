import { Component,  OnInit, Input } from '@angular/core';
import { NavigationService } from '../../../Services/Navigations/navigation.service';
import { UserModel } from 'src/app/Models/Users/User.model';
import { NavigationModel } from 'src/app/Models/Navigations/Navigation.model';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
  providers: [NavigationService]
})
export class NavContentComponent implements OnInit {

  public navigation: NavigationModel[];
  public idUser: number;
  @Input() userData: UserModel;

  constructor(
    // tslint:disable-next-line: variable-name
    private _navService: NavigationService
  ) {

  }

  ngOnInit() {
    this.getNav();
  }

  getNav() {
    this.idUser = this.userData.id;
    this._navService.getNavByUser(this.idUser).subscribe(nav =>  this.navigation = nav);
  }

}
