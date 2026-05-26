import { Route } from '@angular/router';
import { Listings as RealEstateListings } from './real-estate/listings/listings';
import { SingleEntry as RealEstateSingleEntry } from './real-estate/single-entry/single-entry';
import { Vendor } from './real-estate/vendor/vendor';
import { Grid as CarGrid } from './cars/grid/grid';
import { List as CarList } from './cars/list/list';
import { SingleEntry as CarSingleEntry } from './cars/single-entry/single-entry';
import { Listings as ContractorsListings } from './contractors/listings/listings';
import { SingleEntry as ContractorsSingleEntry } from './contractors/single-entry/single-entry';
import { Grid as DoctorsGrid } from './doctors/grid/grid';
import { List as DoctorsList } from './doctors/list/list';
import { SingleEntry as DoctorsSingleEntry } from './doctors/single-entry/single-entry';
import { Listings as EventsListings } from './events/listings/listings';
import { SingleEntry as EventsSingleEntry } from './events/single-entry/single-entry';
import { SideFilters } from './city-guide/side-filters/side-filters';
import { TopFilters } from './city-guide/top-filters/top-filters';
import { SingleEntry as CityGuideSingleEntry } from './city-guide/single-entry/single-entry';
import { AddCar } from './add-car/add-car';

export const LISTING_ROUTES: Route[] = [
  {
    path: 'listings-real-estate',
    component: RealEstateListings,
    data: { title: 'Listings Split View' },
  },
  {
    path: 'single-entry-real-estate',
    component: RealEstateSingleEntry,
    data: { title: 'Property Details Page' },
  },
  {
    path: 'vendor-real-estate',
    component: Vendor,
    data: { title: 'Vendor Page' },
  },
  {
    path: 'listings-grid-cars',
    component: CarGrid,
    data: { title: 'Listings Grid View' },
  },
  {
    path: 'listings-list-cars',
    component: CarList,
    data: { title: 'Listings List View' },
  },
  {
    path: 'single-entry-cars',
    component: CarSingleEntry,
    data: { title: 'Car Details Page' },
  },
  {
    path: 'listings-contractors',
    component: ContractorsListings,
    data: { title: 'Listings with Side Filters' },
  },
  {
    path: 'single-entry-contractors',
    component: ContractorsSingleEntry,
    data: { title: 'Contractor Details Page' },
  },
  {
    path: 'listings-list-doctors',
    component: DoctorsList,
    data: { title: 'Listings List View' },
  },
  {
    path: 'listings-grid-doctors',
    component: DoctorsGrid,
    data: { title: 'Listings Grid View' },
  },
  {
    path: 'single-entry-doctors',
    component: DoctorsSingleEntry,
    data: { title: 'Doctor Details Page' },
  },
  {
    path: 'listings-events',
    component: EventsListings,
    data: { title: 'Listings with Top Filters' },
  },
  {
    path: 'single-entry-events',
    component: EventsSingleEntry,
    data: { title: 'Event Details Page' },
  },
  {
    path: 'listings-side-filters-city-guide',
    component: SideFilters,
    data: { title: 'Listings with Side Filters' },
  },
  {
    path: 'listings-top-filters-city-guide',
    component: TopFilters,
    data: { title: 'Listings with Top Filters' },
  },
  {
    path: 'single-entry-city-guide',
    component: CityGuideSingleEntry,
    data: { title: 'Place Details Page' },
  },
  {
    path: 'add-property',
    loadChildren: () =>
      import('./add-property/add-property.routes').then((mod) => mod.ADD_PROPERTY_ROUTES),
  },
  {
    path: 'add-contractor',
    loadChildren: () =>
      import('./add-contractor/add-contractor.routes').then((mod) => mod.ADD_CONTRACTOR_ROUTES),
  },
  {
    path: 'add-car',
    component: AddCar,
    data: { title: 'Add (Sell) Car Page' },
  },
];
