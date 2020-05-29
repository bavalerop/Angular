import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared.module';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuModifiComponent } from './modifi/menu-modifi.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuCreateComponent,
    MenuModifiComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuComponent,
    MenuCreateComponent,
    MenuModifiComponent
  ]
})
export class MenuModule { }
