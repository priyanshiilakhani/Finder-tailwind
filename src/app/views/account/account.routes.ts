import { Route } from '@angular/router';
import { Profile } from './profile/profile';
import { Listings } from './listings/listings';
import { Reviews } from './reviews/reviews';
import { Favorites } from './favorites/favorites';
import { Payment } from './payment/payment';
import { Settings } from './settings/settings';

export const ACCOUNT_ROUTES: Route[] = [
  {
    path: 'profile',
    component: Profile,
    data: { title: 'Profile' },
  },
  {
    path: 'listings',
    component: Listings,
    data: { title: 'Listings' },
  },
  {
    path: 'reviews',
    component: Reviews,
    data: { title: 'Reviews' },
  },
  {
    path: 'favorites',
    component: Favorites,
    data: { title: 'Favorites' },
  },
  {
    path: 'payment',
    component: Payment,
    data: { title: 'Payment' },
  },
  {
    path: 'settings',
    component: Settings,
    data: { title: 'Settings' },
  },
];
