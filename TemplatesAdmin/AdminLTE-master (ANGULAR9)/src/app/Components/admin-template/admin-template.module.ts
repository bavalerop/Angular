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

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent
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
