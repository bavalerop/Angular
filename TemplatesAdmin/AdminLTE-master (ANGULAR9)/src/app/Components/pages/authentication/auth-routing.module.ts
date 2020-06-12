import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthComponent } from './auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signup',
        component: AuthSignupComponent
      },
      {
        path: 'signin',
        component: AuthSigninComponent
      },
      {
        path: 'admin',
        loadChildren: () => import('../../admin-template/admin-template.module').then(module => module.AdminTemplateModule)
      }
    ]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
