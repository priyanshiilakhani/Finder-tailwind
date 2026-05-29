const propertyImage1 = 'assets/img/listings/real-estate/01.jpg';
const propertyImage2 = 'assets/img/listings/real-estate/02.jpg';
const propertyImage4 = 'assets/img/listings/real-estate/04.jpg';
const propertyImage5 = 'assets/img/listings/real-estate/05.jpg';
const propertyImage6 = 'assets/img/listings/real-estate/06.jpg';

export type PropertyListing = {
  image: string;
  propertyType: string;
  price: string;
  address: string;
  area: string;
  createdDate: string;
  stats: {
    views: number;
    favorites: number;
    calls: number;
  };
  buttonText?: string;
}

export type PropertySection = {
  id: string;
  tabId: string;
  hidden?: boolean;
  showActions?: boolean;
  masterCheckboxLabel?: string;
  listings?: PropertyListing[];
  emptyState?: {
    title: string;
    description: string;
    buttonText: string;
  };
};

export const propertySections: PropertySection[] = [
  {
    id: 'published',
    tabId: 'published-tab',
    showActions: true,
    masterCheckboxLabel: 'Unselect all',
    listings: [
      {
        image: propertyImage1,
        propertyType: 'For rent',
        price: '$2,500',
        address: '40 S 9th St, Brooklyn, NY 11249',
        area: '97 sq.m',
        createdDate: '05/10/2024',
        stats: {
          views: 1246,
          favorites: 23,
          calls: 8,
        },
      },
      {
        image: propertyImage6,
        propertyType: 'For sale',
        price: '$1,350',
        address: '929 Hart St,Brooklyn, NY 11237',
        area: '108 sq.m',
        createdDate: '19/05/2024',
        stats: {
          views: 392,
          favorites: 7,
          calls: 4,
        },
      },
      {
        image: propertyImage2,
        propertyType: 'For rent',
        price: '$1,350',
        address: '444 Park Ave, Brooklyn, NY 11205',
        area: '45 sq.m',
        createdDate: '12/06/2024',
        stats: {
          views: 678,
          favorites: 5,
          calls: 1,
        },
      },
    ],
  },

  {
    id: 'drafts',
    tabId: 'drafts-tab',
    hidden: true,
    showActions: false,
    masterCheckboxLabel: 'Select all the ads to apply the same action to them',
    listings: [
      {
        image: propertyImage5,
        propertyType: 'For rent',
        price: '$-.---',
        address: '517 82nd St, Brooklyn, NY 11209',
        area: '00 sq.m',
        createdDate: '13/12/2024',
        buttonText: 'Finish and publish',
        stats: {
          views: 0,
          favorites: 0,
          calls: 0,
        },
      },
      {
        image: propertyImage4,
        propertyType: 'For rent',
        price: '$1,430',
        address: '67-04 Myrtle Ave Glendale, NY 11385',
        area: '62 sq.m',
        createdDate: '09/11/2024',
        buttonText: 'publish',
        stats: {
          views: 0,
          favorites: 0,
          calls: 0,
        },
      },
    ],
  },

  {
    id: 'archived',
    tabId: 'archived-tab',
    showActions: false,
    hidden: true,
    emptyState: {
      title: 'You have no archived ads',
      description:
        "This means all your active ads are still visible to users. Archiving ads helps you retain your information even when it's temporarily inactive.",
      buttonText: 'Archive ad',
    },
  },
];