import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CompanyModel } from '../../Models/Company/Company.model';
import { CompanyService } from '../../Services/Company/company.service';
import { UserService } from '../../Services/Users/user.service';
import { UserModel } from '../../Models/Users/User.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [CompanyService, UserService]
})
export class AdminComponent implements OnInit {
  public sidebarMenuOpened = true;
  @ViewChild('contentWrapper', { static: false }) contentWrapper;

  public companyData: CompanyModel;
  public userData: UserModel;

  constructor(private renderer: Renderer2,
              // tslint:disable-next-line: variable-name
              private _companyService: CompanyService,
              // tslint:disable-next-line: variable-name
              private _userService: UserService) {}

  ngOnInit() {
    this.companyData = this._companyService.getEmpresa();
    this.userData = this._userService.getUser();
  }

  toggleMenuSidebar() {
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(document.body, 'sidebar-open');
      this.renderer.addClass(document.body, 'sidebar-collapse');
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(document.body, 'sidebar-collapse');
      this.renderer.addClass(document.body, 'sidebar-open');
      this.sidebarMenuOpened = true;
    }
  }
}
