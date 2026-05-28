import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/landing/landing').then((mod) => mod.Landing),
    data: { title: 'Index' },
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.routes').then((mod) => mod.HOME_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./views/listing/listing.routes').then((mod) => mod.LISTING_ROUTES),
  },
  {
    path: 'account',
    loadChildren: () => import('./views/auth/auth.routes').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: 'account',
    loadChildren: () => import('./views/account/account.routes').then((mod) => mod.ACCOUNT_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./views/pages/pages.routes').then((mod) => mod.PAGES_ROUTES),
  },
];

