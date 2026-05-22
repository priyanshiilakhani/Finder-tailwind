export type MenuLink = {
  title: string;
  href?: string;
  description?: string;
  image?: string;
};

export type MenuSection = {
  heading: string;
  links: MenuLink[];
};

export type AccordionItem = {
  title: string;
  icon: string;
  className?: string;
  links?: MenuLink[];
  sections?: MenuSection[];
  children?: AccordionItem[];
};

export const mobileMenuData: AccordionItem[] = [
  {
    title: 'Home',
    icon: 'tabler:chevron-down',
    className: 'p-3',
    links: [
      {
        title: 'Real Estate',
        href: 'home-real-estate.html',
        description: 'Property listings directory',
      },
      {
        title: 'Cars',
        href: 'home-cars.html',
        description: 'Vehicle sales listings',
      },
      {
        title: 'Contractors',
        href: 'home-contractors.html',
        description: 'Professional services directory',
      },
      {
        title: 'Doctors',
        href: 'home-doctors.html',
        description: 'Medical professionals listings',
      },
      {
        title: 'Events',
        href: 'home-events.html',
        description: 'Upcoming events listings',
      },
      {
        title: 'City Guide',
        href: 'home-city-guide.html',
        description: 'Local places directory',
      },
    ],
  },

  {
    title: 'Listings',
    icon: 'tabler:chevron-down',
    className: 'p-6',
    sections: [
      {
        heading: 'Real Estate',
        links: [
          {
            title: 'Map/Listings Split View',
            href: 'listings-real-estate.html',
          },
          {
            title: 'Property Details Page',
            href: 'single-entry-real-estate.html',
          },
          {
            title: 'Vendor Page',
            href: 'vendor-real-estate.html',
          },
        ],
      },

      {
        heading: 'Cars',
        links: [
          {
            title: 'Listings Grid View',
            href: 'listings-grid-cars.html',
          },
          {
            title: 'Listings List View',
            href: 'listings-list-cars.html',
          },
          {
            title: 'Car Details Page',
            href: 'single-entry-cars.html',
          },
        ],
      },

      {
        heading: 'Contractors',
        links: [
          {
            title: 'Listings with Side Filters',
            href: 'listings-contractors.html',
          },
          {
            title: 'Contractor Details Page',
            href: 'single-entry-contractors.html',
          },
        ],
      },

      {
        heading: 'Doctors',
        links: [
          {
            title: 'Listings List View',
            href: 'listings-list-doctors.html',
          },
          {
            title: 'Listings Grid View',
            href: 'listings-grid-doctors.html',
          },
          {
            title: 'Doctor Details Page',
            href: 'single-entry-doctors.html',
          },
        ],
      },

      {
        heading: 'Events',
        links: [
          {
            title: 'Listings with Top Filters',
            href: 'listings-events.html',
          },
          {
            title: 'Event Details Page',
            href: 'single-entry-events.html',
          },
        ],
      },

      {
        heading: 'City Guide',
        links: [
          {
            title: 'Listings with Side Filters',
            href: 'listings-side-filters-city-guide.html',
          },
          {
            title: 'Listings with Top Filters',
            href: 'listings-top-filters-city-guide.html',
          },
          {
            title: 'Place Details Page',
            href: 'single-entry-city-guide.html',
          },
        ],
      },

      {
        heading: 'Add Property',
        links: [
          {
            title: 'Property type',
            href: 'add-property-type.html',
          },
          {
            title: 'Location',
            href: 'add-property-location.html',
          },
          {
            title: 'Photos and Videos',
            href: 'add-property-photos.html',
          },
          {
            title: 'Property Details',
            href: 'add-property-details.html',
          },
          {
            title: 'Price',
            href: 'add-property-price.html',
          },
          {
            title: 'Contact Info',
            href: 'add-property-contact-info.html',
          },
          {
            title: 'Ad Promotion',
            href: 'add-property-promotion.html',
          },
        ],
      },

      {
        heading: 'Add Contractor',
        links: [
          {
            title: 'Business Location',
            href: 'add-contractor-location.html',
          },
          {
            title: 'Choose Services',
            href: 'add-contractor-services.html',
          },
          {
            title: 'Profile Details',
            href: 'add-contractor-profile.html',
          },
          {
            title: 'Price and Hours',
            href: 'add-contractor-price-hours.html',
          },
          {
            title: 'Create First Project',
            href: 'add-contractor-project.html',
          },
        ],
      },

      {
        heading: 'Add (Sell) Car',
        links: [
          {
            title: 'Add (Sell) Car Page',
            href: 'add-car.html',
          },
        ],
      },
    ],
  },

  {
    title: 'Account',
    icon: 'tabler:chevron-down',

    children: [
      {
        title: 'Auth Pages',
        icon: 'lucide:chevron-down',

        links: [
          {
            title: 'Sign In',
            href: 'account-signin.html',
          },
          {
            title: 'Sign Up',
            href: 'account-signup.html',
          },
          {
            title: 'Password Recovery',
            href: 'account-password-recovery.html',
          },
        ],
      },
    ],

    links: [
      {
        title: 'My Profile',
        href: 'account-profile.html',
      },
      {
        title: 'My Listings',
        href: 'account-listings.html',
      },
      {
        title: 'Reviews',
        href: 'account-reviews.html',
      },
      {
        title: 'Favorites',
        href: 'account-favorites.html',
      },
      {
        title: 'Payment Details',
        href: 'account-payment.html',
      },
      {
        title: 'Account Settings',
        href: 'account-settings.html',
      },
    ],
  },

  {
    title: 'Pages',
    icon: 'tabler:chevron-down',

    children: [
      {
        title: 'About',
        icon: 'lucide:chevron-down',

        links: [
          {
            title: 'About v.1',
            href: 'about-v1.html',
          },
          {
            title: 'About v.2',
            href: 'about-v2.html',
          },
        ],
      },

      {
        title: 'Blog',
        icon: 'lucide:chevron-down',

        links: [
          {
            title: 'Blog Layout v.1',
            href: 'blog-layout-v1.html',
          },
          {
            title: 'Blog Layout v.2',
            href: 'blog-layout-v2.html',
          },
          {
            title: 'Blog Layout v.3',
            href: 'blog-layout-v3.html',
          },
          {
            title: 'Blog Layout v.4',
            href: 'blog-layout-v4.html',
          },
          {
            title: 'Single Post v.1',
            href: 'blog-single-v1.html',
          },
          {
            title: 'Single Post v.2',
            href: 'blog-single-v2.html',
          },
          {
            title: 'Single Post v.3',
            href: 'blog-single-v3.html',
          },
        ],
      },

      {
        title: 'Contact',
        icon: 'lucide:chevron-down',

        links: [
          {
            title: 'Contact v.1',
            href: 'contact-v1.html',
          },
          {
            title: 'Contact v.2',
            href: 'contact-v2.html',
          },
          {
            title: 'Contact v.3',
            href: 'contact-v3.html',
          },
        ],
      },

      {
        title: 'Help Center',
        icon: 'lucide:chevron-down',

        links: [
          {
            title: 'Help Topics v.1',
            href: 'help-topics-v1.html',
          },
          {
            title: 'Help Topics v.2',
            href: 'help-topics-v2.html',
          },
          {
            title: 'Help Topics v.3',
            href: 'help-topics-v3.html',
          },
          {
            title: 'Help Single Article v.1',
            href: 'help-single-article-v1.html',
          },
          {
            title: 'Help Single Article v.2',
            href: 'help-single-article-v2.html',
          },
          {
            title: 'Help Single Article v.3',
            href: 'help-single-article-v3.html',
          },
        ],
      },

      {
        title: '404 Error',
        icon: 'lucide:chevron-down',

        links: [
          {
            title: 'Background Image (Real Estate)',
            href: '404-bg-image.html',
          },
          {
            title: 'Icon Image (Cars)',
            href: '404-icon.html',
          },
          {
            title: 'Split Screen (Contractors)',
            href: '404-split-screen.html',
          },
          {
            title: 'Illustration (City Guide)',
            href: '404-illustration.html',
          },
        ],
      },
    ],

    links: [
      {
        title: 'Terms & Conditions',
        href: 'terms-and-conditions.html',
      },
    ],
  },
];
