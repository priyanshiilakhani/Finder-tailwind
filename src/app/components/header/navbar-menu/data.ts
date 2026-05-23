const realEstateLight = 'assets/img/mega-menu/real-estate-light.jpg';
const realEstateDark = 'assets/img/mega-menu/real-estate-dark.jpg';

const carsLight = 'assets/img/mega-menu/cars-light.jpg';
const carsDark = 'assets/img/mega-menu/cars-dark.jpg';

const contractorsLight = 'assets/img/mega-menu/contractors-light.jpg';
const contractorsDark = 'assets/img/mega-menu/contractors-dark.jpg';

const doctorsLight = 'assets/img/mega-menu/doctors-light.jpg';
const doctorsDark = 'assets/img/mega-menu/doctors-dark.jpg';

const eventsLight = 'assets/img/mega-menu/events-light.jpg';
const eventsDark = 'assets/img/mega-menu/events-dark.jpg';

const cityGuideLight = 'assets/img/mega-menu/city-guide-light.jpg';
const cityGuideDark = 'assets/img/mega-menu/city-guide-dark.jpg';

export type MenuImage = {
  light: string;
  dark: string;
};

export type MenuLink = {
  label: string;
  link: string;
};

export type MegaMenuItem = {
  title: string;
  description?: string;
  link?: string;
  image?: MenuImage;
  links?: MenuLink[];
  className?: string;
};

export type MenuSection = {
  heading?: string;
  items: MegaMenuItem[];
};

export type NavbarMenuType = {
  label: string;
  type: 'mega' | 'dropdown';
  sections?: MenuSection[];
  items?: MegaMenuItem[];
};

export const navbarMenuData: NavbarMenuType[] = [
  {
    label: 'Home',
    type: 'mega',
    items: [
      {
        title: 'Real Estate',
        description: 'Property listings directory',
        link: '/home/real-estate',
        image: {
          light: realEstateLight,
          dark: realEstateDark,
        },
      },
      {
        title: 'Cars',
        description: 'Vehicle sales listings',
        link: '/home/cars',
        image: {
          light: carsLight,
          dark: carsDark,
        },
      },
      {
        title: 'Contractors',
        description: 'Professional services directory',
        link: '/home/contractors',
        image: {
          light: contractorsLight,
          dark: contractorsDark,
        },
      },
      {
        title: 'Doctors',
        description: 'Medical professionals listings',
        link: '/home/doctors',
        image: {
          light: doctorsLight,
          dark: doctorsDark,
        },
      },
      {
        title: 'Events',
        description: 'Upcoming events listings',
        link: '/home/events',
        image: {
          light: eventsLight,
          dark: eventsDark,
        },
      },
      {
        title: 'City Guide',
        description: 'Local places directory',
        link: '/home/city-guide',
        image: {
          light: cityGuideLight,
          dark: cityGuideDark,
        },
      },
    ],
  },

  {
    label: 'Listings',
    type: 'mega',
    sections: [
      {
        items: [
          {
            title: 'Real Estate',
            links: [
              {
                label: 'Map/Listings Split View',
                link: '/listings-real-estate',
              },
              {
                label: 'Property Details Page',
                link: '/single-entry-real-estate',
              },
              {
                label: 'Vendor Page',
                link: '/vendor-real-estate',
              },
            ],
          },
          {
            title: 'Cars',
            links: [
              {
                label: 'Listings Grid View',
                link: '/listings-grid-cars',
              },
              {
                label: 'Listings List View',
                link: '/listings-list-cars',
              },
              {
                label: 'Car Details Page',
                link: '/single-entry-cars',
              },
            ],
          },
          {
            title: 'Contractors',
            links: [
              {
                label: 'Listings with Side Filters',
                link: '/listings-contractors',
              },
              {
                label: 'Contractor Details Page',
                link: '/single-entry-contractors',
              },
            ],
          },
          {
            title: 'Doctors',
            links: [
              {
                label: 'Listings List View',
                link: '/listings-list-doctors',
              },
              {
                label: 'Listings Grid View',
                link: '/listings-grid-doctors',
              },
              {
                label: 'Doctor Details Page',
                link: '/single-entry-doctors',
              },
            ],
          },
        ],
      },

      {
        items: [
          {
            title: 'Events',
            links: [
              {
                label: 'Listings with Top Filters',
                link: '/listings-events',
              },
              {
                label: 'Event Details Page',
                link: '/single-entry-events',
              },
            ],
          },
          {
            title: 'City Guide',
            links: [
              {
                label: 'Listings with Side Filters',
                link: '/listings-side-filters-city-guide',
              },
              {
                label: 'Listings with Top Filters',
                link: '/listings-top-filters-city-guide',
              },
              {
                label: 'Place Details Page',
                link: '/single-entry-city-guide',
              },
            ],
          },
          {
            title: 'Add Property',
            links: [
              {
                label: 'Property type',
                link: '/add-property/type',
              },
              {
                label: 'Location',
                link: '/add-property/location',
              },
              {
                label: 'Photos and Videos',
                link: '/add-property/photos',
              },
              {
                label: 'Property Details',
                link: '/add-property/details',
              },
              {
                label: 'Price',
                link: '/add-property/price',
              },
              {
                label: 'Contact Info',
                link: '/add-property/contact-info',
              },
              {
                label: 'Ad Promotion',
                link: '/add-property/promotion',
              },
            ],
          },
        ],
      },

      {
        items: [
          {
            title: 'Add Contractor',
            links: [
              {
                label: 'Business Location',
                link: '/add-contractor/location',
              },
              {
                label: 'Choose Services',
                link: '/add-contractor/services',
              },
              {
                label: 'Profile Details',
                link: '/add-contractor/profile',
              },
              {
                label: 'Price and Hours',
                link: '/add-contractor/price-hours',
              },
              {
                label: 'Create First Project',
                link: '/add-contractor/project',
              },
            ],
          },
          {
            title: 'Add (Sell) Car',
            links: [
              {
                label: 'Add (Sell) Car Page',
                link: '/add-car',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    label: 'Account',
    type: 'dropdown',
    items: [
      {
        title: 'Auth pages',
        className: 'w-46',
        links: [
          {
            label: 'Sign In',
            link: '/account/signin',
          },
          {
            label: 'Sign Up',
            link: '/account/signup',
          },
          {
            label: 'Password Recovery',
            link: '/account/password-recovery',
          },
        ],
      },
      {
        title: 'My Profile',
        link: '/account/profile',
      },
      {
        title: 'My Listings',
        link: '/account/listings',
      },
      {
        title: 'Reviews',
        link: '/account/reviews',
      },
      {
        title: 'Favorites',
        link: '/account/favorites',
      },
      {
        title: 'Payment Details',
        link: '/account/payment',
      },
      {
        title: 'Account Settings',
        link: '/account/settings',
      },
    ],
  },

  {
    label: 'Pages',
    type: 'dropdown',
    items: [
      {
        title: 'About',
        className: 'w-46',
        links: [
          {
            label: 'About v.1',
            link: '/about/v1',
          },
          {
            label: 'About v.2',
            link: '/about/v2',
          },
        ],
      },
      {
        title: 'Blog',
        className: 'w-46',
        links: [
          {
            label: 'Blog Layout v.1',
            link: '/blog-layout/v1',
          },
          {
            label: 'Blog Layout v.2',
            link: '/blog-layout/v2',
          },
          {
            label: 'Blog Layout v.3',
            link: '/blog-layout/v3',
          },
          {
            label: 'Blog Layout v.4',
            link: '/blog-layout/v4',
          },
          {
            label: 'Single Post v.1',
            link: '/blog-single/v1',
          },
          {
            label: 'Single Post v.2',
            link: '/blog-single/v2',
          },
          {
            label: 'Single Post v.3',
            link: '/blog-single/v3',
          },
        ],
      },
      {
        title: 'Contact',
        className: 'w-46',
        links: [
          {
            label: 'Contact v.1',
            link: '/contact/v1',
          },
          {
            label: 'Contact v.2',
            link: '/contact/v2',
          },
          {
            label: 'Contact v.3',
            link: '/contact/v3',
          },
        ],
      },
      {
        title: 'Help Center',
        className: 'w-50',
        links: [
          {
            label: 'Help Topics v.1',
            link: '/help/topics/v1',
          },
          {
            label: 'Help Topics v.2',
            link: '/help/topics/v2',
          },
          {
            label: 'Help Topics v.3',
            link: '/help/topics/v3',
          },
          {
            label: 'Help Single Article v.1',
            link: '/help/single-article/v1',
          },
          {
            label: 'Help Single Article v.2',
            link: '/help/single-article/v2',
          },
          {
            label: 'Help Single Article v.3',
            link: '/help/single-article/v3',
          },
        ],
      },
      {
        title: '404 Error',
        className: 'w-66',
        links: [
          {
            label: 'Background Image (Real Estate)',
            link: '/404/bg-image',
          },
          {
            label: 'Icon Image (Cars)',
            link: '/404/icon',
          },
          {
            label: 'Split Screen (Contractors)',
            link: '/404/split-screen',
          },
          {
            label: 'Illustration (City Guide)',
            link: '/404/illustration',
          },
        ],
      },
      {
        title: 'Terms & Conditions',
        link: '/terms-and-conditions',
      },
    ],
  },
];
