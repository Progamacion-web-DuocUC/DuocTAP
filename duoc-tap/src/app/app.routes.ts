import { Routes } from '@angular/router';
import { AuthGuard } from './authentication/authentication.guard';

export const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./authentication/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'reset',
    loadComponent: () => import('./authentication/reset/reset.page').then( m => m.ResetPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./authentication/reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
