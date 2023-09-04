import { NgModule } from '@angular/core';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo('/auth/login');

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'

  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.routes').then(m => m.routes),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }