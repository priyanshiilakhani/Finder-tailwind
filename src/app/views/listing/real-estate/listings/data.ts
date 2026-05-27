const realEstateImage01 = 'assets/img/listings/real-estate/01.jpg';
const realEstateImage02 = 'assets/img/listings/real-estate/02.jpg';
const realEstateImage03 = 'assets/img/listings/real-estate/03.jpg';
const realEstateImage04 = 'assets/img/listings/real-estate/04.jpg';
const realEstateImage05 = 'assets/img/listings/real-estate/05.jpg';
const realEstateImage06 = 'assets/img/listings/real-estate/06.jpg';
const realEstateImage07 = 'assets/img/listings/real-estate/07.jpg';
const realEstateImage08 = 'assets/img/listings/real-estate/08.jpg';
const realEstateImage09 = 'assets/img/listings/real-estate/09.jpg';
const realEstateImage10 = 'assets/img/listings/real-estate/10.jpg';

export type RealEstateListingType = {
  markerId: number;
  routeLink: string;
  price: string;
  address: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  isVerified: boolean;
  isNew: boolean;
  images: string[];
};

export const realEstateListingData: RealEstateListingType[] = [
  {
    markerId: 1,
    routeLink: '/single-entry-real-estate',
    price: '$1,620',
    address: '40 S 9th St, Brooklyn, NY 11249',
    area: '65 sq.m',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    isVerified: true,
    isNew: true,
    images: [realEstateImage01, realEstateImage01, realEstateImage01],
  },
  {
    markerId: 2,
    routeLink: '/single-entry-real-estate',
    price: '$1,320',
    address: '517 82nd St, Brooklyn, NY 11209',
    area: '45 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    isVerified: false,
    isNew: true,
    images: [realEstateImage02, realEstateImage02, realEstateImage02],
  },
  {
    markerId: 3,
    routeLink: '/single-entry-real-estate',
    price: '$1,890',
    address: '3811 Ditmars Blvd Astoria, NY 11105',
    area: '75 sq.m',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    isVerified: true,
    isNew: true,
    images: [realEstateImage03, realEstateImage03, realEstateImage03],
  },
  {
    markerId: 4,
    routeLink: '/single-entry-real-estate',
    price: '$1,170',
    address: '67-04 Myrtle Ave Glendale, NY 11385',
    area: '42 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    isVerified: false,
    isNew: false,
    images: [realEstateImage04, realEstateImage04, realEstateImage04],
  },
  {
    markerId: 5,
    routeLink: '/single-entry-real-estate',
    price: '$1,250',
    address: '444 Park Ave, Brooklyn, NY 11205',
    area: '54 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    isVerified: true,
    isNew: false,
    images: [realEstateImage05, realEstateImage05, realEstateImage05],
  },
  {
    markerId: 6,
    routeLink: '/single-entry-real-estate',
    price: '$2,750',
    address: '929 Hart St, Brooklyn, NY 11237',
    area: '108 sq.m',
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    isVerified: false,
    isNew: true,
    images: [realEstateImage06, realEstateImage06, realEstateImage06],
  },
  {
    markerId: 7,
    routeLink: '/single-entry-real-estate',
    price: '$1,490',
    address: '123 Bedford Avenue, Brooklyn, NY 11211',
    area: '80 sq.m',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    isVerified: false,
    isNew: false,
    images: [realEstateImage07, realEstateImage07, realEstateImage07],
  },
  {
    markerId: 8,
    routeLink: '/single-entry-real-estate',
    price: '$1,560',
    address: '124 Maple Street, Brooklyn, NY 11211',
    area: '50 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    isVerified: true,
    isNew: true,
    images: [realEstateImage08, realEstateImage08, realEstateImage08],
  },
  {
    markerId: 9,
    routeLink: '/single-entry-real-estate',
    price: '$3,860',
    address: '212 Harrison Street, Brooklyn, NY 11240',
    area: '130 sq.m',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    isVerified: false,
    isNew: false,
    images: [realEstateImage09, realEstateImage09, realEstateImage09],
  },
  {
    markerId: 10,
    routeLink: '/single-entry-real-estate',
    price: '$2,950',
    address: '456 Court Street, Brooklyn, NY 11231',
    area: '96 sq.m',
    bedrooms: 3,
    bathrooms: 1,
    parking: 1,
    isVerified: false,
    isNew: false,
    images: [realEstateImage10, realEstateImage10, realEstateImage10],
  },
];

export type HomeTypeOptionType = {
  id: string;
  label: string;
  count: number;
  checked: boolean;
};

export const homeTypeData: HomeTypeOptionType[] = [
  {
    id: 'apartments-offcanvas',
    label: 'Apartments',
    count: 621,
    checked: true,
  },
  {
    id: 'houses-offcanvas',
    label: 'Houses',
    count: 157,
    checked: false,
  },
  {
    id: 'condos-offcanvas',
    label: 'Condos',
    count: 283,
    checked: false,
  },
  {
    id: 'townhomes-offcanvas',
    label: 'Townhomes',
    count: 346,
    checked: false,
  },
];

export type BedroomOptionType = {
  id: string;
  label: string;
  checked: boolean;
};

export const bedroomData: BedroomOptionType[] = [
  {
    id: 'bedrooms-any',
    label: 'Any',
    checked: true,
  },
  {
    id: 'bedrooms-1',
    label: '1',
    checked: false,
  },
  {
    id: 'bedrooms-2',
    label: '2',
    checked: false,
  },
  {
    id: 'bedrooms-3',
    label: '3',
    checked: false,
  },
  {
    id: 'bedrooms-4',
    label: '4+',
    checked: false,
  },
];

export type BathroomOptionType = {
  id: string;
  label: string;
  checked: boolean;
};

export const bathroomData: BathroomOptionType[] = [
  {
    id: 'bathrooms-any',
    label: 'Any',
    checked: true,
  },
  {
    id: 'bathrooms-1',
    label: '1',
    checked: false,
  },
  {
    id: 'bathrooms-2',
    label: '2',
    checked: false,
  },
  {
    id: 'bathrooms-3',
    label: '3',
    checked: false,
  },
  {
    id: 'bathrooms-4',
    label: '4+',
    checked: false,
  },
];

export type AmenityOptionType = {
  id: string;
  label: string;
  checked: boolean;
};

export const leftAmenityData: AmenityOptionType[] = [
  {
    id: 'ac',
    label: 'Air conditioning',
    checked: true,
  },
  {
    id: 'balcony',
    label: 'Balcony',
    checked: false,
  },
  {
    id: 'garage',
    label: 'Garage',
    checked: false,
  },
  {
    id: 'gym',
    label: 'Gym',
    checked: false,
  },
  {
    id: 'parking',
    label: 'Parking',
    checked: true,
  },
];

export const rightAmenityData: AmenityOptionType[] = [
  {
    id: 'pool',
    label: 'Pool',
    checked: false,
  },
  {
    id: 'cctv',
    label: 'Security cameras',
    checked: false,
  },
  {
    id: 'wifi',
    label: 'WiFi',
    checked: true,
  },
  {
    id: 'laundry',
    label: 'Laundry',
    checked: false,
  },
  {
    id: 'dishwasher',
    label: 'Dishwasher',
    checked: false,
  },
];

export const yearData: number[] = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
];

export const petData: AmenityOptionType[] = [
  {
    id: 'cats',
    label: 'Cats allowed',
    checked: true,
  },
  {
    id: 'dogs',
    label: 'Dogs allowed',
    checked: false,
  },
];

export const additionalOptionData: AmenityOptionType[] = [
  {
    id: 'verified',
    label: 'Verified',
    checked: false,
  },
  {
    id: 'featured',
    label: 'Featured',
    checked: false,
  },
];