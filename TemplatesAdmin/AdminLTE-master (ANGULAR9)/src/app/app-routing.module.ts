import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './Components/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/admin-template/admin-template.module').then(module => module.AdminTemplateModule)
  },
  {
    path: 'login',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./Components/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
