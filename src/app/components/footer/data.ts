export type footerType = {
  title: string;
  links: string[];
};

export const footerData: footerType[] = [
  {
    title: 'Quick links',
    links: ['Daily rental', 'Long-term rental', 'Buy property', 'Sell property', 'Popular offers'],
  },
  {
    title: 'Profile',
    links: ['My account', 'My listings', 'Add listings', 'Help center', 'Privacy policy'],
  },
];

export const citiesData: string[] = [
  'New York',
  'Chicago',
  'Indianapolis',
  'Boston',
  'Altanta',
  'Chincinnati',
  'Los Angeles',
  'Dallas',
  'Pittsburg',
  'Tampa',
];

export type footer2Type = {
  title: string;
  columns: string[][];
};

export const footerData2: footer2Type = {
  title: 'Popular categories',
  columns: [
    ['Air conditioning', 'Painting', 'Electrician', 'Concrete', 'Plumbing', 'Roofing'],
    ['Cleaning', 'Heating & furnace', 'Carpentry', 'Flooring', 'Pest control', 'Landscaping'],
  ],
};

export const companyData: footerType = {
  title: 'Company',
  links: [
    'About',
    'Press & announcements',
    'Careers at Finder',
    'Contact us',
    'Terms of use',
    'Privacy',
  ],
};

export type paymentMethodType = {
  src: string;
  alt: string;
};

export const paymentMethodsData: paymentMethodType[] = [
  {
    src: 'assets/img/payment-methods/visa-dark-mode.svg',
    alt: 'Visa',
  },
  {
    src: 'assets/img/payment-methods/mastercard.svg',
    alt: 'Mastercard',
  },
  {
    src: 'assets/img/payment-methods/paypal-dark-mode.svg',
    alt: 'PayPal',
  },
  {
    src: 'assets/img/payment-methods/google-pay-dark-mode.svg',
    alt: 'Google Pay',
  },
  {
    src: 'assets/img/payment-methods/apple-pay-dark-mode.svg',
    alt: 'Apple Pay',
  },
];

export const footerData3: footerType[] = [
  {
    title: 'For patients',
    links: ['Family medicine', 'Pediatrics', 'Top hospitals', 'Telehealth', 'Dentistry'],
  },
  {
    title: 'For providers',
    links: [
      'Provider log in',
      'Promote your practice',
      'Claim your free profile',
      'News and features',
      'Help center',
    ],
  },
  {
    title: 'Our company',
    links: ['Contact us', 'About us', 'Healthgrades methodologies', 'Privacy preferences'],
  },
];

export const footerData4: footerType[] = [
  {
    title: 'Events',
    links: ['Popular near you', 'Online events', 'Sport', 'Cinema', 'Theater'],
  },
  {
    title: 'For providers',
    links: [
      'Provider log in',
      'For partners',
      'Event ticket service',
      'News and features',
      'Help center',
    ],
  },
  {
    title: 'Our company',
    links: ['About us', 'Ticket delivery', 'Payment'],
  },
];

export const footerData5: footerType[] = [
  {
    title: 'Quick links',
    links: [
      'Top cities',
      'Accommodation',
      'Cafes & restaurants',
      'Night clubs',
      'Events & meetups',
      'Beauty salons',
      'Pharmacies',
    ],
  },
  {
    title: 'Profile',
    links: [
      'My account',
      'My listings',
      'Gift cards',
      'Help center',
      'Taxes & fees',
      'Privacy policy',
    ],
  },
];

export type FooterFeatureType = {
  icon: string;
  title: string;
};

export type FooterLinkType = {
  label: string;
};

export type FooterSectionType = {
  title: string;
  links: FooterLinkType[];
};

export type AppButtonType = {
  ariaLabel: string;
  icon?: string;
  iconSvg?: boolean;
  textSvg: boolean;
};

export type SocialMediaType = {
  icon: string;
  tooltip: string;
};

export const footerFeatureData: FooterFeatureType[] = [
  {
    icon: 'tabler:copy',
    title: 'Over 1 million listings',
  },
  {
    icon: 'tabler:file-search',
    title: 'Personalized search',
  },
  {
    icon: 'tabler:cash-banknote-edit',
    title: 'Online car appraisal',
  },
  {
    icon: 'tabler:bulb',
    title: 'Non-stop innovation',
  },
];

export const footerSectionData: FooterSectionType[] = [
  {
    title: 'Buying & selling',
    links: [
      {
        label: 'Find a car',
      },
      {
        label: 'Sell your car',
      },
      {
        label: 'Car dealers',
      },
      {
        label: 'Compare cars',
      },
      {
        label: 'Online car appraisal',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        label: 'About Finder',
      },
      {
        label: 'Contact us',
      },
      {
        label: 'FAQs & support',
      },
      {
        label: 'Mobile app',
      },
      {
        label: 'Blog & news',
      },
    ],
  },
  {
    title: 'Profile',
    links: [
      {
        label: 'My account',
      },
      {
        label: 'Wishlist',
      },
      {
        label: 'My listings',
      },
      {
        label: 'Add listings',
      },
    ],
  },
];

export const socialMediaData: SocialMediaType[] = [
  {
    icon: 'tabler:brand-instagram',
    tooltip: 'instagram',
  },
  {
    icon: 'tabler:brand-facebook-filled',
    tooltip: 'Facebook',
  },
  {
    icon: 'tabler:brand-x',
    tooltip: 'X (Twitter)',
  },
];