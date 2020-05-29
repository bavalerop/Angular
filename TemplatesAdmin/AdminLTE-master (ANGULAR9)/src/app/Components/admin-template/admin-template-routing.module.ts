import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlankComponent } from '../pages/blank/blank.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path : '',
    component: AdminComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'users',
        component: BlankComponent
      },
      {
        path: 'dash2',
        component: DashboardComponent
      },
      {
        path: 'menu',
        loadChildren: () => import('../pages/menus/menu.module').then(module => module.MenuModule)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTemplateRoutingModule { }
