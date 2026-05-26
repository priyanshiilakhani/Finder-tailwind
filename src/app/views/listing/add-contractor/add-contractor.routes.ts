import { Route } from '@angular/router';
import { Location } from './location/location';

export const ADD_CONTRACTOR_ROUTES: Route[] = [
  {
    path: 'location',
    component: Location,
    data: { title: 'Business Location' },
  },
  {
    path: 'services',
    component: Location,
    data: { title: 'Choose Services' },
  },
  {
    path: 'profile',
    component: Location,
    data: { title: 'Profile Details' },
  },
  {
    path: 'price-hours',
    component: Location,
    data: { title: 'Price and Hours' },
  },
  {
    path: 'project',
    component: Location,
    data: { title: 'Create First Project' },
  },
];
