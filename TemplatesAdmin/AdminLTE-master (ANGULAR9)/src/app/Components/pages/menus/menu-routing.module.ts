import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuModifiComponent } from './modifi/menu-modifi.component';

import { MenuComponent } from './menu.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'create',
        component: MenuCreateComponent
      },
      {
        path: 'modifi',
        component: MenuModifiComponent
      },
      {
        path: 'delete',
        component: MenuCreateComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
