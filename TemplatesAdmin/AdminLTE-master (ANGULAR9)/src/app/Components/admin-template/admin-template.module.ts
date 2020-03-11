import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { BlankComponent } from '../pages/blank/blank.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { MessagesDropdownMenuComponent } from './header/messages-dropdown-menu/messages-dropdown-menu.component';
// tslint:disable-next-line: max-line-length
import { NotificationsDropdownMenuComponent } from './header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { SharedModule } from '../shared.module';
import { NavContentComponent } from './navigation/nav-content.component';
import { NavCollapseComponent } from './navigation/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './navigation/nav-group/nav-group.component';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';
import { NavItemaloneComponent } from './navigation/nav-itemalone/nav-itemalone.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    NavContentComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavGroupComponent,
    ProfileComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    NavItemaloneComponent
  ],
  imports: [
    CommonModule,
    AdminTemplateRoutingModule,
    SharedModule
  ],
  exports: [
    AdminComponent,
    SharedModule
  ]
})
export class AdminTemplateModule { }
