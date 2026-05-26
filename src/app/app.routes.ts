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
];
