import { Route } from '@angular/router';
import { Location } from './location/location';
import { Services } from './services/services';
import { Profile } from './profile/profile';
import { PriceHours } from './price-hours/price-hours';
import { Project } from './project/project';

export const ADD_CONTRACTOR_ROUTES: Route[] = [
  {
    path: 'location',
    component: Location,
    data: { title: 'Business Location' },
  },
  {
    path: 'services',
    component: Services,
    data: { title: 'Choose Services' },
  },
  {
    path: 'profile',
    component: Profile,
    data: { title: 'Profile Details' },
  },
  {
    path: 'price-hours',
    component: PriceHours,
    data: { title: 'Price and Hours' },
  },
  {
    path: 'project',
    component: Project,
    data: { title: 'Create First Project' },
  },
];
