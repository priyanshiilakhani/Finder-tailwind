// images
const cityGuide1 = 'assets/img/listings/city-guide/v2/01.jpg';
const cityGuide2 = 'assets/img/listings/city-guide/v2/02.jpg';
const cityGuide3 = 'assets/img/listings/city-guide/v2/03.jpg';
const cityGuide4 = 'assets/img/listings/city-guide/v2/04.jpg';
const cityGuide5 = 'assets/img/listings/city-guide/v2/05.jpg';
const cityGuide6 = 'assets/img/listings/city-guide/v2/06.jpg';
const cityGuide7 = 'assets/img/listings/city-guide/v2/07.jpg';
const cityGuide8 = 'assets/img/listings/city-guide/v2/08.jpg';
const cityGuide9 = 'assets/img/listings/city-guide/v2/09.jpg';
const cityGuide10 = 'assets/img/listings/city-guide/v2/10.jpg';
const cityGuide11 = 'assets/img/listings/city-guide/v2/11.jpg';
const cityGuide12 = 'assets/img/listings/city-guide/v2/12.jpg';

export type PropertyTypeFilterType = {
  id: string;
  label: string;
  totalProperties: number;
  checked: boolean;
};

export const propertyTypeFilterData: PropertyTypeFilterType[] = [
  {
    id: 'apartments',
    label: 'Apartments',
    totalProperties: 621,
    checked: true,
  },
  {
    id: 'hotels',
    label: 'Hotels',
    totalProperties: 57,
    checked: true,
  },
  {
    id: 'hostels',
    label: 'Hostels',
    totalProperties: 83,
    checked: false,
  },
  {
    id: 'bb',
    label: 'Bed and Breakfasts',
    totalProperties: 46,
    checked: false,
  },
  {
    id: 'resorts',
    label: 'Resorts',
    totalProperties: 19,
    checked: true,
  },
  {
    id: 'motels',
    label: 'Motels',
    totalProperties: 10,
    checked: false,
  },
  {
    id: 'cabins',
    label: 'Cabins or Cottages',
    totalProperties: 24,
    checked: true,
  },
  {
    id: 'villas',
    label: 'Villas',
    totalProperties: 98,
    checked: false,
  },
];

export type PriceRangeFilterType = {
  id: string;
  label: string;
  totalProperties: number;
  checked: boolean;
};

export const priceRangeFilterData: PriceRangeFilterType[] = [
  {
    id: 'price-1',
    label: '$0.00 - 99.99',
    totalProperties: 241,
    checked: false,
  },
  {
    id: 'price-2',
    label: '$100.00 - 199.99',
    totalProperties: 398,
    checked: false,
  },
  {
    id: 'price-3',
    label: '$200.00 - 299.99',
    totalProperties: 253,
    checked: false,
  },
  {
    id: 'price-4',
    label: '$300.00 - 399.99',
    totalProperties: 197,
    checked: false,
  },
  {
    id: 'price-5',
    label: '$400.00 - 499.99',
    totalProperties: 152,
    checked: false,
  },
  {
    id: 'price-6',
    label: '$500.00 - 599.99',
    totalProperties: 138,
    checked: false,
  },
  {
    id: 'price-7',
    label: '$600.00+',
    totalProperties: 27,
    checked: false,
  },
];

export type RoomFacilityFilterType = {
  id: string;
  label: string;
  totalProperties: number;
  checked: boolean;
};

export const roomFacilityFilterData: RoomFacilityFilterType[] = [
  {
    id: 'kitchen',
    label: 'Kitchen',
    totalProperties: 27,
    checked: false,
  },
  {
    id: 'terrace',
    label: 'Terrace',
    totalProperties: 89,
    checked: false,
  },
  {
    id: 'ac',
    label: 'Air Conditioning',
    totalProperties: 145,
    checked: false,
  },
  {
    id: 'heating',
    label: 'Heating',
    totalProperties: 106,
    checked: false,
  },
  {
    id: 'desk',
    label: 'Desk',
    totalProperties: 73,
    checked: false,
  },
  {
    id: 'washing-machine',
    label: 'Washing Machine',
    totalProperties: 67,
    checked: false,
  },
  {
    id: 'private-bathroom',
    label: 'Private Bathroom',
    totalProperties: 210,
    checked: false,
  },
  {
    id: 'laundry',
    label: 'Laundry Service',
    totalProperties: 132,
    checked: false,
  },
];

export type AmenityFilterType = {
  id: string;
  label: string;
  totalProperties: number;
  checked: boolean;
};

export const amenityFilterData: AmenityFilterType[] = [
  {
    id: 'room-service',
    label: 'Room Service',
    totalProperties: 482,
    checked: false,
  },
  {
    id: 'wifi',
    label: 'Free WiFi',
    totalProperties: 537,
    checked: false,
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    totalProperties: 209,
    checked: false,
  },
  {
    id: 'bar',
    label: 'Bar',
    totalProperties: 182,
    checked: false,
  },
  {
    id: 'fitness',
    label: 'Fitness Center',
    totalProperties: 156,
    checked: false,
  },
  {
    id: 'swimming',
    label: 'Swimming Pool',
    totalProperties: 75,
    checked: false,
  },
  {
    id: 'parking',
    label: 'Parking',
    totalProperties: 279,
    checked: false,
  },
];

export type RatingFilterType = {
  id: string;
  ratingLabel: string;
  totalProperties: number;
  checked: boolean;
};

export const ratingFilterData: RatingFilterType[] = [
  {
    id: 'rating-5',
    ratingLabel: '5',
    totalProperties: 282,
    checked: true,
  },
  {
    id: 'rating-4',
    ratingLabel: '4',
    totalProperties: 437,
    checked: true,
  },
  {
    id: 'rating-3',
    ratingLabel: '3',
    totalProperties: 319,
    checked: false,
  },
  {
    id: 'rating-2-1',
    ratingLabel: '2–1',
    totalProperties: 82,
    checked: false,
  },
];

export type CityGuideType = {
  image: string;
  title: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  distanceFromCenter: string;
};

export const cityGuideData: CityGuideType[] = [
  {
    image: cityGuide1,
    title: 'Barcelona Business Hotel',
    rating: 4.8,
    reviewCount: 472,
    priceRange: '$$$',
    distanceFromCenter: '0.6 km from center',
  },
  {
    image: cityGuide2,
    title: 'Big Tree Cottage',
    rating: 4.5,
    reviewCount: 73,
    priceRange: '$$',
    distanceFromCenter: '2.4 km from center',
  },
  {
    image: cityGuide3,
    title: 'Grand Resort & Spa',
    rating: 4.6,
    reviewCount: 209,
    priceRange: '$$$',
    distanceFromCenter: '5.3 km from center',
  },
  {
    image: cityGuide4,
    title: 'Serenity Hotel',
    rating: 4.7,
    reviewCount: 318,
    priceRange: '$$',
    distanceFromCenter: '1.7 km from center',
  },
  {
    image: cityGuide5,
    title: 'Merry Berry Motel',
    rating: 4.3,
    reviewCount: 734,
    priceRange: '$',
    distanceFromCenter: '6.5 km from center',
  },
  {
    image: cityGuide6,
    title: 'Repose Hotel',
    rating: 4.8,
    reviewCount: 165,
    priceRange: '$$$',
    distanceFromCenter: '2.1 km from center',
  },
  {
    image: cityGuide7,
    title: 'Tranquil Hotel',
    rating: 4.5,
    reviewCount: 96,
    priceRange: '$$',
    distanceFromCenter: '3.8 km from center',
  },
  {
    image: cityGuide8,
    title: 'Soothe & Stay',
    rating: 4.4,
    reviewCount: 290,
    priceRange: '$',
    distanceFromCenter: '2.3 km from center',
  },
  {
    image: cityGuide9,
    title: 'Best Nest Apartment',
    rating: 4.8,
    reviewCount: 37,
    priceRange: '$$',
    distanceFromCenter: '1.6 km from center',
  },
  {
    image: cityGuide10,
    title: 'Pine Cottage',
    rating: 4.9,
    reviewCount: 135,
    priceRange: '$$$',
    distanceFromCenter: '0.8 km from center',
  },
  {
    image: cityGuide11,
    title: 'Greenpoint Boutique Hotel',
    rating: 4.2,
    reviewCount: 216,
    priceRange: '$$',
    distanceFromCenter: '1.9 km from center',
  },
  {
    image: cityGuide12,
    title: 'Crystal Studio Apartment',
    rating: 4.7,
    reviewCount: 26,
    priceRange: '$$',
    distanceFromCenter: '1.3 km from center',
  },
];
