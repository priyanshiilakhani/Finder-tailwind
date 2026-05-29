const realEstateImage1 = 'assets/img/listings/real-estate/06.jpg';
const realEstateImage2 = 'assets/img/listings/real-estate/03.jpg';
const realEstateImage3 = 'assets/img/listings/real-estate/05.jpg';

const propertyImage1 = 'assets/img/listings/real-estate/01.jpg';
const propertyImage2 = 'assets/img/listings/real-estate/02.jpg';

export type PropertyActionType = {
  label: string;
  icon: string;
  isDelete?: boolean;
};

export type PropertyStatisticType = {
  icon: string;
  value: number;
};

export type PropertyListingType = {
  image: string;
  propertyType: string;
  price: string;
  address: string;
  area: string;
  createdDate: string;
  actions: PropertyActionType[];
  statistics: PropertyStatisticType[];
};

export const propertyListingData: PropertyListingType[] = [
  {
    image: propertyImage1,
    propertyType: 'For rent',
    price: '$2,500',
    address: '40 S 9th St, Brooklyn, NY 11249',
    area: '97 sq.m',
    createdDate: '05/10/2024',
    actions: [
      {
        label: 'Edit',
        icon: 'square-pen',
      },
      {
        label: 'Promote',
        icon: 'zap',
      },
      {
        label: 'Move to archive',
        icon: 'archive',
      },
      {
        label: 'Delete',
        icon: 'trash-2',
        isDelete: true,
      },
    ],
    statistics: [
      {
        icon: 'lucide:eye',
        value: 1246,
      },
      {
        icon: 'lucide:heart',
        value: 23,
      },
      {
        icon: 'lucide:phone-incoming',
        value: 8,
      },
    ],
  },
  {
    image: propertyImage2,
    propertyType: 'For rent',
    price: '$1,350',
    address: '444 Park Ave, Brooklyn, NY 11205',
    area: '45 sq.m',
    createdDate: '12/06/2024',
    actions: [
      {
        label: 'Edit',
        icon: 'square-pen',

      },
      {
        label: 'Promote',
        icon: 'zap',

      },
      {
        label: 'Move to archive',
        icon: 'archive',

      },
      {
        label: 'Delete',
        icon: 'trash-2',

        isDelete: true,
      },
    ],
    statistics: [
      {
        icon: 'lucide:eye',
        value: 678,
      },
      {
        icon: 'lucide:heart',
        value: 5,
      },
      {
        icon: 'lucide:phone-incoming',
        value: 1,
      },
    ],
  },
];

export type RealEstateTagType = {
  label: string;
  type: 'primary' | 'info' | 'verified';
};

export type RealEstateFeatureType = {
  value: number;
  icon: string;
};

export type RealEstateListingType = {
  images: string[];
  tags: RealEstateTagType[];
  propertyType: string;
  price: string;
  address: string;
  area: string;
  features: RealEstateFeatureType[];
};

export const realEstateListingData: RealEstateListingType[] = [
  {
    images: [realEstateImage1, realEstateImage1, realEstateImage1],
    tags: [
      {
        label: 'New',
        type: 'primary',
      },
    ],
    propertyType: 'For sale',
    price: '$375,000',
    address: '929 Hart St, Brooklyn, NY 11237',
    area: '108 sq.m',
    features: [
      {
        value: 3,
        icon: 'lucide:bed-single',
      },
      {
        value: 2,
        icon: 'lucide:shower-head',
      },
      {
        value: 1,
        icon: 'lucide:car',
      },
    ],
  },
  {
    images: [realEstateImage2, realEstateImage2, realEstateImage2],
    tags: [
      {
        label: 'Features',
        type: 'info',
      },
      {
        label: 'New',
        type: 'primary',
      },
    ],
    propertyType: 'For rent',
    price: '$1,890',
    address: '3811 Ditmars Blvd Astoria, NY 11105',
    area: '75 sq.m',
    features: [
      {
        value: 2,
        icon: 'lucide:bed-single',
      },
      {
        value: 1,
        icon: 'lucide:shower-head',
      },
      {
        value: 1,
        icon: 'lucide:car',
      },
    ],
  },
  {
    images: [realEstateImage3, realEstateImage3, realEstateImage3],
    tags: [
      {
        label: 'Verified',
        type: 'verified',
      },
    ],
    propertyType: 'For rent',
    price: '$1,250',
    address: '444 Park Ave, Brooklyn, NY 11205',
    area: '54 sq.m',
    features: [
      {
        value: 1,
        icon: 'lucide:bed-single',
      },
      {
        value: 1,
        icon: 'lucide:shower-head',
      },
      {
        value: 0,
        icon: 'lucide:car',
      },
    ],
  },
];

export type SupportCardType = {
  icon: string;
  title: string;
  description: string;
};

export const supportCardData: SupportCardType[] = [
  {
    icon: 'lucide:globe',
    title: 'Join a Finder property club',
    description:
      'Join your local Host Club to connect with your hosting community both online and through in-person or virtual meetups.',
  },
  {
    icon: 'lucide:headphones',
    title: 'Join a Finder property club',
    description:
      "I'm your virtual assistant from the Help Center, ready to assist you in finding the information and resources you're looking for.",
  },
];
