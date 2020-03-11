import { Component,  OnInit } from '@angular/core';
import { NavigationService } from '../../../Services/Navigations/navigation.service';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
  providers: [NavigationService]
})
export class NavContentComponent implements OnInit {

  public navigation: any;

  constructor(
    // tslint:disable-next-line: variable-name
    private _navService: NavigationService
    ) {
    this.navigation = this._navService.getNav();
    console.log(this.navigation);
  }

  ngOnInit() {
  }

}
