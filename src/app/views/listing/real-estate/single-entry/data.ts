const image1 = 'assets/img/listings/real-estate/single/01.jpg';
const image2 = 'assets/img/listings/real-estate/single/02.jpg';
const image3 = 'assets/img/listings/real-estate/single/03.jpg';

export type GalleryTYpe = {
  image: string;
  large?: boolean;
};

export const galleryData: GalleryTYpe[] = [
  {
    image: image1,
    large: true,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
];

export type AmenityType = {
  icon: string;
  title: string;
};

export const amenitiesData: AmenityType[] = [
  {
    icon: 'lucide:wifi',
    title: 'WiFi',
  },
  {
    icon: 'tabler:wash-hand',
    title: 'Dishwasher',
  },
  {
    icon: 'lucide:snowflake',
    title: 'Air conditioning',
  },
  {
    icon: 'lucide:circle-parking',
    title: 'Parking place',
  },
  {
    icon: 'lucide:washing-machine',
    title: 'Laundry',
  },
  {
    icon: 'tabler:ironing',
    title: 'Icon',
  },
  {
    icon: 'lucide:video',
    title: 'Security cameras',
  },
  {
    icon: 'lucide:cigarette-off',
    title: 'No smoking',
  },
  {
    icon: 'lucide:paw-print',
    title: 'Pets allowed',
  },
];

// transport-score.data.ts

export type TransportScoreType = {
  icon: string;
  score: string;
  label: string;
};

export const transportScoreData: TransportScoreType[] = [
  {
    icon: 'lucide:footprints',
    score: '73/100',
    label: 'Walkable',
  },
  {
    icon: 'lucide:car',
    score: '97%',
    label: 'Driveable',
  },
  {
    icon: 'lucide:bike',
    score: '59/100%',
    label: 'Bikeable',
  },
];

export type NearbyCategoryType = {
  id: string;
  name: string;
  icon: string;
  checked?: boolean;
}

export const nearbyCategoriesData: NearbyCategoryType[] = [
  {
    id: 'transport',
    name: 'Transport',
    icon: 'lucide:tram-front',
    checked: true,
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'lucide:graduation-cap',
  },
  {
    id: 'shooping',
    name: 'Shooping',
    icon: 'lucide:shopping-bag',
  },
  {
    id: 'food',
    name: 'Food',
    icon: 'lucide:ice-cream-bowl',
  },
  {
    id: 'parks',
    name: 'Parks',
    icon: 'lucide:tree-deciduous',
  },
];

export type PropertyDetailType = {
  label: string;
  value: string;
}

export const propertyDetailsData: PropertyDetailType[] = [
  {
    label: 'Property type',
    value: 'Apartment',
  },
  {
    label: 'Year built',
    value: '2023',
  },
  {
    label: 'Living area',
    value: '42 sq.m',
  },
  {
    label: 'Floor',
    value: '3',
  },
  {
    label: 'Total rooms',
    value: '2',
  },
  {
    label: 'Bedrooms',
    value: '1',
  },
  {
    label: 'Bathrooms',
    value: '1',
  },
];