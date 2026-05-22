import { Route } from '@angular/router';
import { RealEstate } from './real-estate/real-estate';
import { Cars } from './cars/cars';
import { Contractors } from './contractors/contractors';
import { Doctors } from './doctors/doctors';
import { Events } from './events/events';
import { CityGuide } from './city-guide/city-guide';

export const HOME_ROUTES: Route[] = [
  {
    path: 'real-estate',
    component: RealEstate,
    data: { title: 'Index' },
  },
  {
    path: 'cars',
    component: Cars,
    data: { title: 'Index' },
  },
  {
    path: 'contractors',
    component: Contractors,
    data: { title: 'Index' },
  },
  {
    path: 'doctors',
    component: Doctors,
    data: { title: 'Index' },
  },
  {
    path: 'events',
    component: Events,
    data: { title: 'Index' },
  },
  {
    path: 'city-guide',
    component: CityGuide,
    data: { title: 'Index' },
  },
];
