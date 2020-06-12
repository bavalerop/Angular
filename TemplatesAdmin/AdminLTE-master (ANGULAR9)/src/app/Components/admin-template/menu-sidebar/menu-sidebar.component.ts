import { Component, OnInit, Input} from '@angular/core';
import { UserModel } from '../../../Models/Users/User.model';
import { CompanyModel } from '../../../Models/Company/Company.model';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  @Input() userData: UserModel;
  @Input() companyData: CompanyModel;

  constructor(
  ) {}

  ngOnInit() {
  }
}
