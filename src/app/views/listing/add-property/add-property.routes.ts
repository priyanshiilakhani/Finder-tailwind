import { Route } from '@angular/router';
import { Type } from './type/type';
import { Location } from './location/location';
import { Photos } from './photos/photos';
import { Details } from './details/details';
import { Price } from './price/price';
import { ContactInfo } from './contact-info/contact-info';
import { Promotion } from './promotion/promotion';

export const ADD_PROPERTY_ROUTES: Route[] = [
  {
    path: 'type',
    component: Type,
    data: { title: 'Property type' },
  },
  {
    path: 'location',
    component: Location,
    data: { title: 'Location' },
  },
  {
    path: 'photos',
    component: Photos,
    data: { title: 'Photos and Videos' },
  },
  {
    path: 'details',
    component: Details,
    data: { title: 'Property Details' },
  },
  {
    path: 'price',
    component: Price,
    data: { title: 'Price' },
  },
  {
    path: 'contact-info',
    component: ContactInfo,
    data: { title: 'Contact Info' },
  },
  {
    path: 'promotion',
    component: Promotion,
    data: { title: 'Ad Promotion' },
  },
];
