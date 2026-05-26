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
    data: { title: 'Real Estate' },
  },
  {
    path: 'cars',
    component: Cars,
    data: { title: 'Cars' },
  },
  {
    path: 'contractors',
    component: Contractors,
    data: { title: 'Contractors' },
  },
  {
    path: 'doctors',
    component: Doctors,
    data: { title: 'Doctors' },
  },
  {
    path: 'events',
    component: Events,
    data: { title: 'Events' },
  },
  {
    path: 'city-guide',
    component: CityGuide,
    data: { title: 'City Guide' },
  },
];
