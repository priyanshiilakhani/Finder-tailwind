const realEstateImage01 = 'assets/img/listings/real-estate/01.jpg';
const realEstateImage03 = 'assets/img/listings/real-estate/03.jpg';
const realEstateImage04 = 'assets/img/listings/real-estate/04.jpg';
const realEstateImage05 = 'assets/img/listings/real-estate/05.jpg';
const realEstateImage06 = 'assets/img/listings/real-estate/06.jpg';

export type RealEstateListingType = {
  images: string[];
  propertyLabel: string;
  propertyPrice: string;
  propertyAddress: string;
  propertyArea: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  isFavorite: boolean;
  topBadges?: {
    label: string;
    className: string;
    icon?: string;
  }[];
};

export const realEstateListingData: RealEstateListingType[] = [
  {
    images: [realEstateImage06, realEstateImage06, realEstateImage06],
    propertyLabel: 'For sale',
    propertyPrice: '$375,000',
    propertyAddress: '929 Hart St, Brooklyn, NY 11237',
    propertyArea: '108 sq.m',
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    isFavorite: true,
    topBadges: [
      {
        label: 'New',
        className: 'bg-primary inline-flex w-auto text-white text-xs px-2 py-1 rounded',
      },
    ],
  },
  {
    images: [realEstateImage03, realEstateImage03, realEstateImage03],
    propertyLabel: 'For rent',
    propertyPrice: '$1,890',
    propertyAddress: '3811 Ditmars Blvd Astoria, NY 11105',
    propertyArea: '75 sq.m',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    isFavorite: true,
    topBadges: [
      {
        label: 'Features',
        className:
          'bg-info text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center',
      },
      {
        label: 'New',
        className: 'bg-primary inline-flex w-auto text-white text-xs px-2 py-0.5 rounded',
      },
    ],
  },
  {
    images: [realEstateImage05, realEstateImage05, realEstateImage05],
    propertyLabel: 'For rent',
    propertyPrice: '$1,250',
    propertyAddress: '444 Park Ave, Brooklyn, NY 11205',
    propertyArea: '54 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    isFavorite: true,
    topBadges: [
      {
        label: 'Verified',
        className:
          'bg-info text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center',
        icon: 'lucide:shield',
      },
    ],
  },
  {
    images: [realEstateImage01, realEstateImage01, realEstateImage01],
    propertyLabel: 'For rent',
    propertyPrice: '$1,620',
    propertyAddress: '40 S 9th St, Brooklyn, NY 11249',
    propertyArea: '65 sq.m',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    isFavorite: true,
  },
  {
    images: [realEstateImage04, realEstateImage04, realEstateImage04],
    propertyLabel: 'For rent',
    propertyPrice: '$1,170',
    propertyAddress: '67-04 Myrtle Ave Glendale, NY 11385',
    propertyArea: '42 sq.m',
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    isFavorite: true,
  },
];