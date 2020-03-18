import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserModel } from '../../../Models/Users/User.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userData: UserModel;
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}

  ngOnInit() {
  }
}
