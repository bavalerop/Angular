import { Component, OnInit} from '@angular/core';
import { CompanyModel } from '../../../Models/Company/Company.model';
import { CompanyService } from '../../../Services/Company/company.service';
import { UserService } from '../../../Services/Users/user.service';
import { UserModel } from '../../../Models/Users/User.model';


@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
  providers: [CompanyService, UserService]
})
export class MenuSidebarComponent implements OnInit {

  public companyData: CompanyModel;
  public userData: UserModel;

  constructor(
    // tslint:disable-next-line: variable-name
    private _companyService: CompanyService,
    // tslint:disable-next-line: variable-name
    private _userService: UserService,
  ) {}

  ngOnInit() {
    this.companyData = this._companyService.getEmpresa();
    this.userData = this._userService.getUser();
    console.log(this.companyData);
  }
}
