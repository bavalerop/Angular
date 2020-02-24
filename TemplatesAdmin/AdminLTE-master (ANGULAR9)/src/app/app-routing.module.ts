import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { BlankComponent } from './Components/pages/blank/blank.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/pages/profile/profile.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/pages/dashboard/dashboard.component';
import { AuthGuard } from './Components/utils/guards/auth.guard';
import { NonAuthGuard } from './Components/utils/guards/non-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'blank',
        component: BlankComponent
      },
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
