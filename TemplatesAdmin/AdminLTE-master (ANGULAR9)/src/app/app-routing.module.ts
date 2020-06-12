import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./Components/admin-template/admin-template.module').then(module => module.AdminTemplateModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/pages/authentication/auth.module').then(module => module.AuthModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
