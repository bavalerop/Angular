import { Component,  OnInit, Input } from '@angular/core';
import { NavigationService } from '../../../Services/Navigations/navigation.service';
import { UserModel } from 'src/app/Models/Users/User.model';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
  providers: [NavigationService]
})
export class NavContentComponent implements OnInit {

  public navigation: any;
  public idUser: number;
  @Input() userData: UserModel;

  constructor(
    // tslint:disable-next-line: variable-name
    private _navService: NavigationService
    ) {

  }

  ngOnInit() {
    this.idUser = this.userData.id;
    this.navigation = this._navService.getNavByUser(this.idUser);
    console.log(this.navigation);
  }

}
