import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2, Input } from '@angular/core';
import { UserModel } from '../../../../Models/Users/User.model';

@Component({
  selector: 'app-user-config-dropdown-menu',
  templateUrl: './user-config-dropdown-menu.component.html',
  styleUrls: ['./user-config-dropdown-menu.component.scss']
})
export class UserConfigDropdownMenuComponent implements OnInit {
  @ViewChild('dropdownMenu', { static: false }) dropdownMenu;
  @Input() userData: UserModel;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  toggleDropdownMenu() {
    if (this.dropdownMenu.nativeElement.classList.contains('show')) {
      this.hideDropdownMenu();
    } else {
      this.showDropdownMenu();
    }
  }

  showDropdownMenu() {
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
  }

  hideDropdownMenu() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
  }
}
